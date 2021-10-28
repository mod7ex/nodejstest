const express = require("express");
const path = require("path");
const { midLogger, authorize } = require("./middleware");
const { people } = require("./data");
const productsRouter = require("./routes/products");

const app = express();

// Middlewares
// app.use(express.static("./public"));
// app.use([authorize, midLogger]);
// app.use(authorize);
// app.use("/api", midLogger);
app.use([
      express.urlencoded({ extended: false }),
      express.json(),
      express.raw(),
]);

app.use("/api/products", productsRouter);

// Usual routes
// router.get("/", midLogger, (req, res) => {
//       res.status(200).sendFile(path.resolve(__dirname, "./index.html"));
// });

app.get("/", (req, res) => {
      res.status(200).send("<h1>Hello World -Home Page-</h1>");
      // res.status(200).sendFile(path.resolve(__dirname, "./index.html"));
});

app.get("/about", (req, res) => {
      res.status(200).send("<h1>Hello World -ABout Page-</h1>");
});

app.get("/api/people", (req, res) => {
      res.json(people);
});

app.get("*", (req, res) => {
      res.status(404).send("<h1>404 Not Found</h1>");
});

app.post("/login", (req, res) => {
      console.log(req.body);
      // let { email, password } = req.body;
      res.json(req.body);
});

app.listen(5000, () => {
      console.log("server is listening on port 5000...");
});
