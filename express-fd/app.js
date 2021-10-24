const express = require("express");
const path = require("path");

const { products } = require("./data");

const app = express();

// set up static and middleware
app.use(express.static("./public"));

// API route
app.get("/api/products", (req, res) => {
      res.json(products);
});

app.get("/api/products/:productId", (req, res) => {
      let { productId } = req.params;

      if (Number(productId) == NaN) {
            res.status(404).end("Not Found 404");
            return;
      }

      singleProduct = products.find(
            (product) => product.id === Number(productId)
      );

      if (!singleProduct) {
            res.status(404).end("Not Found 404");
            return;
      }

      res.json(singleProduct);
});

// Usual routes
app.get("/", (req, res) => {
      res.status(200).sendFile(path.resolve(__dirname, "./index.html"));
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
