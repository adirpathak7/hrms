const mongoose = require('mongoose');
const { Schema } = mongoose
const AdmindbSchema = new Schema({
    
    username:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
})

const Admindb = mongoose.model("admindb", AdmindbSchema);
module.exports = Admindb;