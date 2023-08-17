import userModel from "../models/userModel.js"
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from 'jsonwebtoken';

//RESGISTER || POST
export const registerController = async(req,res) => {
    try{
        const { name, email, password, phone, address } = req.body;
        //validation
        if (!name) { return res.send({message:"Name is required"}) }

        if (!email) { return res.send({message:"Email is required"}) }

        if (!password) { return res.send({message:"Password is required"}) }

        if (!phone) { return res.send({message:"Phone no. is required"}) }

        if (!address) { return res.send({message:"Address is required"}) }

        //check existing user
        const existingUser = await userModel.findOne({email});
        if (existingUser) {
           return res.status(200).send({
            success:false,
            message:"Already Registered please login",
           })
        }

        //registering user nad hasing the password
        const hashingThePassword = await hashPassword(password);
        
        //save the userModel
        const user = await new userModel({name, email, phone, address, password:hashingThePassword}).save()

        res.status(201).send({
            success:true,
            message:'User Registered Successfully',
            user
        })
    } catch(error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in registeration",
            error
        })
    }
}


// LOGIN || POST
export const loginController = async(req,res) => {
    try{
        const {email, password} = req.body;
        //validation
        if(!email || !password) {
            return res.status(404).send({
                success:false,
                message:"Invalid Email or Password"
            })
        }
        //check user from database
        const user = await userModel.findOne({email});
        //validation for user if it exist
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Email is not registered"
            })
        }
        //matching if the password is correct or not 
        const match = await comparePassword(password,user.password);
        if(!match){
            return res.status(200).send({
                success:true,
                message:"Invalid password"
            });
        }

        //token creation using jwt //iske nivha ka halka sa bhi mat chedo
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET, {
            expiresIn:"7d",
        }); 
        
        res.status(200).send({
            success:true,
            message:'login successfully',
            user:{ //custom create kia hai
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
            },
            token  //token bhbi pass krdia
        })
    }catch(error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in login",
            error
        })
    }
}

//TEST CONTROLLEER
export const testController = (req,res) => {
        res.send("Protected Route")
}

