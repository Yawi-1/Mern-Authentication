import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://yawimalik786:atK6pUMq3Y1NWw7a@cluster0.jncrn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
   console.log('Mongo Db Connected Successfuly..!!')
})
.catch((err)=>{
    console.log('Error connecting to MongoDB',err)
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
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
 const User = mongoose.model('User', userSchema);
export default User; 
