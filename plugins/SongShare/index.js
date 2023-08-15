import { fetchAndPlayMediaItem } from "@neptune/actions/content";

const http = require("http");
const { networkInterfaces } = require("os");
const mdns = require("multicast-dns")();

const trackRegex = /track\/(\d+)/;

function getLocalIP() {
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      const familyV4Value = typeof net.family === "string" ? "IPv4" : 4;
      if (net.family === familyV4Value && !net.internal) return net.address;
    }
  }
}

const localIP = getLocalIP();

mdns.on("query", () => {
  mdns.respond({
    answers: [
      {
        name: "neptune-songshare.local",
        type: "A",
        ttl: 300,
        data: localIP,
      },
    ],
  });
});

const server = http.createServer((req, res) => {
  if (req.method != "POST") return;

  req.setEncoding("utf-8");
  const body = [];

  req.on("data", (chunks) => body.push(chunks));
  req.on("end", () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');

    const shareData = body.join("");

    const trackId = shareData.match(trackRegex)?.[1];
    if (trackId)
      fetchAndPlayMediaItem({
        itemId: trackId,
        itemType: "track"
      });
  });
});

server.listen(16257);

export const onUnload = () => {
  try {
    mdns.destroy();
  } catch {}

  try {
    server.stop();
  } catch {}
};
