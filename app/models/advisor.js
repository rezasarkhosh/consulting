const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const advisorSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    madrak: {
        type: String,
    },
    isadvisor: {
        type: Boolean,
        required: false,
        default: true
    },
    education: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    date: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    part: {
        type: String,
        required: true,
        default: 'personal'
    },
});



advisorSchema.pre('save', function (next) {
    bcrypt.hash(this.password, bcrypt.genSaltSync(8), (err, hash) => {
        if (err) next(err);
        this.password = hash;
        next();
    });
});



module.exports = mongoose.model('advisor', advisorSchema);