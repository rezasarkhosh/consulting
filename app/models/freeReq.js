const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const freeReqSchema = new Schema({
    ask: {
        type: String,
        required: true,
        trim: true,
    },
    answer: {
        type: String,
        required: true,
        trim: true,
    },
});





module.exports = mongoose.model('freeReq', freeReqSchema);