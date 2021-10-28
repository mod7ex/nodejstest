const { products } = require("../data");

let getProducts = (req, res) => {
      res.json(products);
};

let getSpecificProducts = (req, res) => {
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
};

let getSingleProduct = (req, res) => {
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
};

module.exports = { getProducts, getSpecificProducts, getSingleProduct };
