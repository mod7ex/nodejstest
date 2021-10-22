const { readFile, writeFile } = require("fs");
const util = require("util");

let readFilePromise = util.promisify(readFile); // we use it rather than getText

/*
let foo = () => {
      return new Promise((resolve, reject) => {
            setTimeout(() => {
                  console.log("this is in between");
                  resolve();
            }, 2000);
      });
};

let func = () => {
      console.log("first");
      foo();
      console.log("second");
};

func();
*/

/* 

const http = require("http");

const server = http.createServer((req, res) => {
      if (req.url === "/") res.end("<h1>Welcome to home page</h1>");
      else if (req.url === "/about") res.end("<h1>Welcome to about page</h1>");
      else res.end("<h1>404</h1>");
});

server.listen(3000); 

*/

/*
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
*/

let getText = (path) => {
      return new Promise((resolve, reject) => {
            readFile(path, "utf8", (err, data) => {
                  if (err) {
                        reject(err);
                  } else {
                        resolve(data);
                  }
            });
      });
};

const start = async () => {
      try {
            // const first = await getText("./content/subfolder/first.txt");
            // const second = await getText("./content/subfolder/second.txt");

            const first = await readFilePromise(
                  "./content/subfolder/first.txt",
                  "utf8"
            );
            const second = await readFilePromise(
                  "./content/subfolder/second.txt",
                  "utf8"
            );

            console.log(first);
            console.log(second);
      } catch (err) {
            console.log(err);
      }
};

start();
console.log("let us do it");

// getText("./content/subfolder/first.txt")
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));

// *************************************************************************************
