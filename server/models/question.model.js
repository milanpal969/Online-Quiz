const mongoose  = require('mongoose');

const questionSchema = mongoose.model({

    question:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        enum:["A",'B','C','D'],
        required:true
    }

},{timestamps:true});

module.exports = mongoose.model("Question",questionSchema);