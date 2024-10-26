const mongoose = require('mongoose');
const { Schema } = mongoose
const UserSchema = new Schema({
    fname: {
        type: String,
    },
    lname: {
        type: String,
    },
    email: {
        type: String,
    },
    contact: {
        type: Number,
    },
    gender: {
        type: String,
    },
    dob: {
        type: Date,
    },
    address: {
        type: String,
    },
    hireDate: {
        type: Date,
    },
    salary: {
        type: Number,
    },
    deptName: {
        type: String,
    },
    manager: {
        type :String,
    },
    password:{
        type:String,
    }
})

const User = mongoose.model("users", UserSchema);
module.exports = User;