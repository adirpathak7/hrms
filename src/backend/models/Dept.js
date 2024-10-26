const mongoose = require('mongoose');
const { Schema } = mongoose
const DeptSchema = new Schema({
    
    dname:{
        type: String,
    },
    mname:{
        type: String,
    },
})

const Dept = mongoose.model("depts", DeptSchema);
module.exports = Dept;