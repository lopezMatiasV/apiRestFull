const mongoose = require('mongoose');

const StoreScheme = new mongoose.Schema(
    {
        url : {
            type : String,
        },
        filename : {
            type : String,
            unique : true,
        },
    },
    {
        timestamps : true,
        versionKey : false,
    }
)
module.exports = mongoose.model('storages', StoreScheme)