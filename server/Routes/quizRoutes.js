const express = require('express');
const router = express.Router();
const Usermiddleware = require('../middlewares/Usermiddleware');
const Question = require('../models/question.model');

router.post('/add-question', Usermiddleware, async (req,res) => {

    try{

        const {question, options, answer} = req.body;
        console.log(question);

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

router.get('/get-questions', Usermiddleware, async (req,res) => {

    try{

        const response = await Question.find({});

        if(response){
            res.status(201).send({
                data:response,
                success:true,
                message:"questions fetched successfully"
            })
        }else{
            res.status(501).send({
                success:false,
                message:"error while fetching questions"
            })
        }
    }catch(e){
        res.status(501).send({
            success:false,
            message:e.message
        })
    }
});

router.delete('/delete-question',Usermiddleware, async (req,res) => {

    try{
        console.log(req.body._id);
        const response = await Question.deleteOne({_id: req.body._id});
        if(response){
        res.status(201).send({
            success:true,
            message:"question deleted successfully",
        });
    }
    }catch(e){
        res.status(501).send({
            success:false,
            message:e.message
        });
    }
})

module.exports = router