const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,

    },
    number: {
        type: String,
        required: true,
        trim: true,
    },
    isAdvisor: {
        type: Boolean,
        required: false,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false,
    }
}, {
    timestamps: { createdAt: true }
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, bcrypt.genSaltSync(8), (err, hash) => {
        if (err) next(err);
        this.password = hash;
        next();
    });
});




module.exports = mongoose.model('User', userSchema);