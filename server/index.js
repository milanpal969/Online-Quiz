require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes.js');
const quizRoutes = require('./Routes/quizRoutes.js');

const dbConnect = require('./utils/db.js');  

const app = express();

app.use(express.json());

app.use(cors({
    origin:'http://127.0.0.1:3000/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],

}));

app.use('/api/v1/',userRoutes);
app.use('/api/v1/quiz',quizRoutes);

dbConnect(); 

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
