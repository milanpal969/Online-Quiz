const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type:String,
        unique:[true,'username already exist'],
        required:[true,'username is required']
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        unique:true,
        required:true
    },
    totalMatches:{
        type:Number,
        default:0,
    },
    maxScore:{
        type:Number,
        default:0
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
},{timestamps:true});


module.exports = mongoose.model("User", userSchema);