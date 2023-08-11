import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js'; //expension compulsary


//configure env
dotenv.config();

//databae config
connectDB();

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//rest api creation
app.get('/',(req,res) => {
    res.send({
        message:"welcome to ecommerce app"
    });
});

//PORT
const PORT = process.env.PORT || 8000;

//run listen(app run)
app.listen(PORT,() => {
    console.log(`console running on ${process.env.DEV_MODE} on PORT : ${PORT}`.bgGreen.blue);
});