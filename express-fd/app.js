const express = require("express");
const path = require("path");
const { midLogger, authorize } = require("./middleware");
const { products, people } = require("./data");

const app = express();

// Middlewares
// app.use(express.static("./public"));
// app.use([authorize, midLogger]);
// app.use(authorize);
// app.use("/api", midLogger);

// Usual routes

// app.get("/", midLogger, (req, res) => {
//       res.status(200).sendFile(path.resolve(__dirname, "./index.html"));
// });

app.get("/", (req, res) => {
      res.status(200).send("<h1>Hello World -Home Page-</h1>");
      // res.status(200).sendFile(path.resolve(__dirname, "./index.html"));
});

app.get("/about", (req, res) => {
      res.status(200).send("<h1>Hello World -ABout Page-</h1>");
});

// API route
app.get("/api/products", (req, res) => {
      res.json(products);
});

app.get("/api/products/query", (req, res) => {
      let { search, limit } = req.query;

      sortedProducts = [];

      limit = Number(limit) ? Number(limit) : products.length;

      if (search) {
            for (let i = 0; i < products.length; i++) {
                  if (sortedProducts.length == limit) break;

                  if (products[i].name.startsWith(search)) {
                        sortedProducts.push(products[i]);
                  }
            }
      } else {
            sortedProducts = products.slice(0, limit);
      }

      res.json(sortedProducts);
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

app.get("/api/people", (req, res) => {
      res.json(people);
});

app.get("*", (req, res) => {
      res.status(404).send("<h1>404 Not Found</h1>");
});

app.use(express.urlencoded({ extended: false }));
app.post("/login", (req, res) => {
      let { email, password } = req.body;
      res.json({ email, password });
});

app.listen(5000, () => {
      console.log("server is listening on port 5000...");
});
