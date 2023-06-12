const mongoose = require('mongoose')
const config = require('../configs/db.config')

function initialize(){
    mongoose.connect(config.url);
}

module.exports = {initialize}