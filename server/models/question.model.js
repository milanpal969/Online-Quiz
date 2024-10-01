const mongoose  = require('mongoose');

const questionSchema = new mongoose.Schema({

    question:{
        type:String,
        required:true
    },
    options:{
        type:Array,
        required:true
    },
    answer:{
        type:String,
        enum:["A",'B','C','D'],
        required:true
    }

},{timestamps:true});

module.exports = mongoose.model("Question",questionSchema);