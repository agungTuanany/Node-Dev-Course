const mongoose = require('mongoose');

const User = mongoose.model('users', {
    email: {
        require: true,
        trim:true,
        type: String,
        minLength:1
    }
});

module.exports = {
    User,
}