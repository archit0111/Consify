import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();
app.use(cors());
app.use(express.json());

if(process.env.DATABASE){
    mongoose.connect(process.env.DATABASE)
    .then(()=>console.log("MongoDB connected successfully!!"))
    .catch(()=>console.log("Error occored in connecting to database"));
}else{
    console.log("DATABASE not present in ENV!");
}


import userRoutes from './routes/userRoutes';

app.use('/api/user',userRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server is listning at port ${process.env.PORT}`);
});