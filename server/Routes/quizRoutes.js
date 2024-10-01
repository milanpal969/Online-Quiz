const express = require('express');
const router = express.Router();
const Usermiddleware = require('../middlewares/Usermiddleware');
const Question = require('../models/question.model');

router.post('/add-question', Usermiddleware, async (req,res) => {

    try{

        const {question, options, answer} = req.body;

        const response =  new Question({
            question:question,
            options:options,
            answer:answer
        });

        await response.save();

        res.status(201).send({
            success:true,
            message:"question added successfully"
        });

    }catch(e){
        res.status(501).send({
            success:false,
            message:e.message
        });
    }
});

module.exports = router