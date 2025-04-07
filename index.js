const dgram = require("dgram");
const client = dgram.createSocket("udp4");

client.on("message", (msg, rinfo) => {
  console.log(`Server: ${rinfo.address}:${rinfo.port} - ${msg}`);
});

client.on("listening", () => {
  const address = client.address();
  console.log(`UDP client listening on ${address.address}:${address.port}`);
});

client.bind(11000); // Bind to port 11000
