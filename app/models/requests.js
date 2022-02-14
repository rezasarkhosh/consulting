const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const requestSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    code: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    advisor: {
        type: Schema.Types.ObjectId,
        required: true,
        trim: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        trim: true,
    },
    pay: {
        type: String,
        required: true,
        trim: true,
        default: 'pay'
    },
    chat: {
        type: String,
        required: true,
        trim: true,
        default: 'chat',
    },
    file: {
        type: String,

        trim: true,
    },
    ask: {
        type: String,
        required: true,
        trim: true,
    },
    fishvariz: {
        type: String,
        required: false,
    },
}, {
    timestamps: {
        createdAt: true
    }
}
);
module.exports = mongoose.model('request', requestSchema);