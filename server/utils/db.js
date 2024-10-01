const mongoose = require('mongoose');

 const dbConnect = async () => {

    try{
        const response = await mongoose.connect(process.env.MONGO_URI);
        if(response){
            console.log('db is live');
        }
    }catch(e){
        console.log(e.message);
    }
}

module.exports = dbConnect
