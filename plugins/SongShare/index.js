import { fetchAndPlayMediaItem } from "@neptune/actions/content";

const http = require("http");
const ciao = require("@homebridge/ciao");
const responder = ciao.getResponder();

const service = responder.createService({
  name: "Neptune Song Share",
  type: "http",
  port: 16257,
  hostname: "neptune-songshare",
});

service.advertise();

const trackRegex = /track\/(\d+)/;

const server = http.createServer((req, res) => {
  if (req.method != "POST") return;

  req.setEncoding("utf-8");
  const body = [];

  req.on("data", (chunks) => body.push(chunks));
  req.on("end", () => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("OK");

    const shareData = body.join("");

    const trackId = shareData.match(trackRegex)?.[1];
    if (trackId)
      fetchAndPlayMediaItem({
        itemId: trackId,
        itemType: "track",
      });
  });
});

server.listen(16257);

export const onUnload = () => {
  try {
    service.destroy();
  } catch {}

  try {
    server.stop();
  } catch {}
};
