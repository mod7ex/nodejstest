const express = require("express");
const {
      getProducts,
      getSpecificProducts,
      getSingleProduct,
} = require("../controllers/products");

const router = express.Router();

// API route
router.get("/", getProducts);

router.get("/query", getSpecificProducts);

router.get("/:productId", getSingleProduct);

module.exports = router;
