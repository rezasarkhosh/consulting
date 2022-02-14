const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const answerSchema = new Schema({

    ids: {
        type: String,
        required: true,
        trim: true
    },
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
    name: {
        type: String,
        required: true,
        trim: true
    },
        phone: {
            type: String,
            required: true,
            trim: true,
        },

        ask: {
            type: String,
            required: true,
            trim: true,
        },
    }, {
        timestamps: {
            createdAt: true
        }
    }
);
module.exports = mongoose.model('answer', answerSchema);