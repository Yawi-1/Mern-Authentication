import bcrypt from 'bcrypt'
import UserModal from '../Models/userModal.js'
export const signup = async(req,res)=>{
    try {
        const {username,email,password} = req.body;
        const isEmail = await UserModal.findOne({email:email});
      if(isEmail){
        return res.status(400).json({
            message: "Email already exists" ,
            success:false     
        });
      }
       const newUser = await new UserModal({username,email,password})
       newUser.password = await bcrypt.hash(password,10);
       await newUser.save();
       res.status(201).json({
        message: "User created successfully",
        success:true
       })
    } catch (error) {
        console.log('Error at sign Up:', error)
    }
}