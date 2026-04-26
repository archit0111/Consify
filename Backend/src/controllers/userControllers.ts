import schema from '../utils/validation';
import bcrypt from 'bcrypt';
import User from '../model/user';
import {Request,Response} from 'express';

const signup = async (req:Request,res:Response)=>{
    console.log("In Landing controler");
    const joiRes = schema.validate(req.body);
    if(joiRes.error){
        return res.status(400).json({message:`${joiRes.error.details[0].message}`});
    }
    try{
        let encryptedPassword = await bcrypt.hash(req.body.password, 12);
        req.body.password = encryptedPassword;
        const newUser = await User.create(req.body);
    }catch(e){
        return res.end(JSON.stringify({message:"Error in creating User: ",e }));
    }

};

export default {
    signup
};