import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://yawimalik786:1234@cluster0.3owwokm.mongodb.net')
.then(()=>{
   console.log('Mongo Db Connected Successfuly..!!')
})
.catch(()=>{
    console.log('Error connecting to MongoDB')
})

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
 const User = mongoose.model('User', userSchema);
export default User; 
