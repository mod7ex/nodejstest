/*

const { readFile, writeFile } = require("fs");

console.log(0);

readFile("./content/subfolder/first.txt", "utf8", (err, res) => {
      if (err) {
            console.log(err);
            return;
      }

      let first = res;

      readFile("./content/subfolder/second.txt", "utf8", (err, res) => {
            if (err) {
                  console.log(err);
                  return;
            }

            let second = res;

            writeFile(
                  "./content/subfolder/third.txt",
                  `Hello World ${first} & ${second}`,
                  (err, res) => {
                        if (err) {
                              console.log(err);
                              return;
                        }

                        console.log(1);
                  }
            );
      });
});

console.log(2);

**************************************************************************************/
const http = require("http");

const server = http.createServer((req, res) => {
      if (req.url === "/") res.end("<h1>Welcome to home page</h1>");
      else if (req.url === "/about") res.end("<h1>Welcome to about page</h1>");
      else res.end("<h1>404</h1>");
});

server.listen(3000);
