import ip from "ip";
import os from "os";
import { createHash } from "crypto";
import { join } from "path";
import process from "process";

const mdns = require(join(
  process.mainModule.path,
  "../node_modules/multicast-dns"
))();

const RemoteDesktopController = require(join(
  process.mainModule.path,
  "main/remoteDesktop/RemoteDesktopController.js"
)).default;

function generateDeviceId() {
  const hostname = os.hostname();

  return {
    deviceId: createHash("md5").update(hostname).digest("hex"),
    hostname,
  };
}

function generateFriendlyName() {
  const hostname = os.hostname().split(".")[0];
  return `Desktop: ${hostname}`;
}

function broadcast({ friendlyName, modelName, serviceName }) {
  const { deviceId, hostname } = generateDeviceId();

  friendlyName = friendlyName || generateFriendlyName();

  const ipAddress = ip.address();

  if (!deviceId || !hostname || !ipAddress) {
    return;
  }

  mdns.on("query", (query, remoteInfo) => {
    const queryMatches =
      query.questions.filter((question) => question.name === serviceName)
        .length > 0;
    if (queryMatches) {
      const response = {
        additionals: [],
        answers: [
          {
            class: "IN",
            data: ipAddress,
            flush: true,
            name: hostname,
            ttl: 120,
            type: "A",
          },
          {
            class: "IN",
            data: [
              Buffer.from(`mn=${modelName}`, "utf8"),
              Buffer.from("ca=0", "utf8"),
              Buffer.from(`id=${deviceId}`, "utf8"),
              Buffer.from(`fn=${friendlyName}`, "utf8"),
              Buffer.from("ve=1", "utf8"),
            ],
            flush: true,
            name: `${modelName}-${deviceId}.${serviceName}`,
            ttl: 4500,
            type: "TXT",
          },
          {
            class: "IN",
            data: `${modelName}-${deviceId}.${serviceName}`,
            flush: false,
            name: serviceName,
            ttl: 4500,
            type: "PTR",
          },
          {
            class: "IN",
            data: {
              port: 2019,
              priority: 0,
              target: hostname,
              weight: 0,
            },
            flush: true,
            name: `${modelName}-${deviceId}.${serviceName}`,
            ttl: 120,
            type: "SRV",
          },
        ],
      };

      mdns.respond(response, remoteInfo);
    }
  });
}

export function openConnect() {
  if (!globalThis.neptuneRemoteDesktop) {
    globalThis.neptuneRemoteDesktop = new RemoteDesktopController();

    neptuneRemoteDesktop.mdnsStartBroadcasting = () => {
      broadcast({
        modelName: "RemoteDesktop", // This is what TIDAL uses for the official RemoteDesktop implementation.
        // This can also be _tidalconnect, but for some reason I get inconsistent behavior when I do it that way.
        serviceName: "_tidalconnect._tcp.local",
      });
    };

    neptuneRemoteDesktop.mdnsStopBroadcasting = () => mdns.destroy();
  }
}

export function closeConnect() {
  mdns.destroy();
}
