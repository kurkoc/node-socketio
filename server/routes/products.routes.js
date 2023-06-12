module.exports = (io)=> {

    const express = require('express');
    const router = express.Router();
    const {cors,corsOptions } = require('../configs/cors.config') 

    const productController = require("../controllers/products.controller.js")(io);


    router.get("/",cors(corsOptions), productController.getProducts);

    router.get("/:id", cors(corsOptions),productController.getProductById);

    router.post("/", cors(corsOptions),productController.insertProduct);

    router.put("/:id", cors(corsOptions),productController.updateProduct);

    router.put("/:id/:quantity", cors(corsOptions),productController.updateProductQuantity);

    return router;

}

