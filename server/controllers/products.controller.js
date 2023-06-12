const { faker } = require('@faker-js/faker');
const Product = require('../models/product.js');
const SocketEvents = require('../helpers/socketEvents.js')

module.exports = (io)=> {

    const getProducts = (async (request, response, next) => {
        const products = await Product.find()
                                        .select({_id :1, name : 1, price : 1, quantity : 1, tags : 1})
                                        .sort({created_date : -1 });
        response.json(products);
    });
    
    const getProductById = (async (request, response, next) => {
        const id = request.params.id;
        const product = await Product.findOne({_id : id})
                                        .select({_id : 0, name : 1, price : 1, quantity : 1, tags : 1});
        response.json(product);                             
    });
    
    
    const insertProduct = (async (request, response, next) => {
        const {name, quantity, price, tags} = request.body;
    
        const product = new Product({
          name : name,
          quantity : quantity,
          price : price,
          tags : tags,
          description : faker.commerce.productDescription()
        });
    
        var result = await Product.create(product);
        response.json(result);
    });
    
    
    const updateProduct = (async (request, response, next) => {
        const id = request.params.id;
        const {name, quantity, price, tags} = request.body;
        var result = await Product.findOneAndUpdate({_id : id}, {name, quantity, price, tags});
        response.json(result);
    });
    
    
    const updateProductQuantity = (async (request, response, next) => {
        const id = request.params.id;
        const quantity = request.params.quantity;
        var result = await Product.findOneAndUpdate({_id : id}, {quantity});
    
        io.to('product-' + id).emit(SocketEvents.PRODUCT_QUANTITY_CHANGED, quantity);
    
        response.json(result);
    });

    return {
        getProducts,
        getProductById,
        insertProduct,
        updateProduct,
        updateProductQuantity
    };
}

