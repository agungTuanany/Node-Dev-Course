const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('users', {
    email: {
        type: String,
        required: true,
        trim:true,
        minLength:1,
        unique: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
            message: `{VALUE} is not valid email`
        }
    },
    password: {
        type: String,
        require: true,
        minLength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

module.exports = {
    User,
}