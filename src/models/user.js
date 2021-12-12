const mongoose = require("../database");
const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    username: {
        type: String,
    },
    birthdate: {
        type: String,
    },
    address: {
        type: String,
    },
    addressNumber: {
        type: String,
    },   
    primaryPhone: {
        type: String,
    },  
    description: {
        type: String,
    },  
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const User = mongoose.model('User',UserSchema);
module.exports = User;
