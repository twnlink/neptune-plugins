import os from "os";
import { createHash } from "crypto";
import { join } from "path";
import process from "process";
import * as ciao from "@homebridge/ciao";

const RemoteDesktopController = require(join(
  process.mainModule.path,
  "main/remoteDesktop/RemoteDesktopController.js"
)).default;

function generateDeviceId() {
  const hostname = os.hostname();

  return createHash("md5").update(hostname).digest("hex");
}

function generateFriendlyName() {
  const hostname = os.hostname().split(".")[0];
  return `Desktop: ${hostname}`;
}

const responder = ciao.getResponder();
const deviceId = generateDeviceId();

let service = responder.createService({
  disabledIpv6: true,
  port: 2019,
  type: "tidalconnect",
  name: `RemoteDesktop-${deviceId}`,
  txt: {
    mn: "RemoteDesktop",
    id: deviceId,
    fn: generateFriendlyName(),
    ca: "0",
    ve: "1",
  }
});

export function openConnect() {
  if (!globalThis.neptuneRemoteDesktop) {
    globalThis.neptuneRemoteDesktop = new RemoteDesktopController();

    neptuneRemoteDesktop.mdnsStartBroadcasting = () => service.advertise()
    neptuneRemoteDesktop.mdnsStopBroadcasting = () => service.end();
  }
}

export function closeConnect() {
  service.end();
}
