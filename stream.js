const { readFileSync, writeFileSync, createReadStream } = require("fs");
const http = require("http");

// for (let i = 0; i < 100000; i++) {
//       writeFileSync("./content/subfolder/big.txt", `hello world ${i}\n`, {
//             flag: "a",
//       });
// }

// const stream = createReadStream("./content/subfolder/big.txt", {
//       highWaterMark: 90000,
// });

// stream.on("data", (result) => {
//       console.log("new data is comming");
//       console.log(result);
// });

// stream.on("error", (err) => {
//       console.log(err);
// });

http.createServer((req, res) => {
      // const text = readFileSync("./content/subfolder/big.txt", "utf8");
      // res.end(text);

      const fileStream = createReadStream(
            "./content/subfolder/big.txt",
            "utf8"
      );

      fileStream.on("open", () => {
            fileStream.pipe(res);
      });

      fileStream.on("error", (err) => {
            res.end(err);
      });
}).listen(3000);
