const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
   name : {"type" : String},
   quantity : {"type" : Number},
   price : {"type" : Number},
   created_date: { type: Date, default: Date.now },
   tags: [String],
   description : {"type" : String}
});

module.exports = mongoose.model('Product', productSchema);
