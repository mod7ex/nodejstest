const express = require("express");
const path = require("path");

const app = express();

// set up static and middleware
app.use(express.static("./public"));

// API route
app.get("/api/", (req, res) => {
      res.json([{ name: "Mourad" }, { name: "Amondo" }]);
});

app.get("/", (req, res) => {
      // res.status(200).sendFile(path.resolve(__dirname, "./index.html"));
});

app.get("/about", (req, res) => {
      res.status(200).send("<h1>Hello World -ABout Page-</h1>");
});

app.get("*", (req, res) => {
      res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(5000, () => {
      console.log("server is listening on port 5000...");
});
