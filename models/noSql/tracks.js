const mongoose = require('mongoose');

const TracksScheme = new mongoose.Schema(
    {
        name : {
            type : String,
        },
        album : {
            type : String,
            unique : true,
        },
        cover : {
            type : String,
            validate : {
                validator : (req) => true
            },
            message : 'ERROR_URL'
        },
        artist : {
            name : {
                type : String,
            },
            nickName : {
                type : String,
            },
            nationality: {
                type : String,
            }
        },
        duration : {
            start : {
                type : Number,
            },
            end : {
                type : Number,
            },
        },
        mediaId : {
            type : mongoose.Types.ObjectId,
        },
    },
    {
        timestamps : true,
        versionKey : false,
    }
)
module.exports = mongoose.model('tracks', TracksScheme)