const fs = require("fs");

const readStream = fs.createReadStream("./readme3.txt", { highWaterMark: 16 });

const data = [];
readStream.on("data", (chunk) => {
  data.push(chunk);
  console.log("chunk", chunk, chunk.length);
});

readStream.on("end", () => {
  console.log("end", Buffer.concat(data).toString());
});

readStream.on("error", (err) => {
  console.log(err);
});

console.log("data", data);
