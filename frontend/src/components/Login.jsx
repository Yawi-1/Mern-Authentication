import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';


const Login = () => {
  const [userData,setUserData] = useState({
    email: "",
    password: "",
 });

 const navigate = useNavigate();
 const handleChange = (e)=>{
    const {name,value} = e.target;
   setUserData({...userData,[name]:value});
 }

  const handleSubmit = async (e)=>{
    try {
      
      const url = 'http://localhost:3000/auth/login';
      e.preventDefault();
      const response = await fetch(url,{
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
           },
           body : JSON.stringify(userData),
      });
      const result = await response.json();
      const {token,email,success} = result;
      if(success){
       localStorage.setItem('token',token);
       localStorage.setItem('loggedInUser',email);
       navigate('/');
      }
      alert(result.message);
    } catch (error) {
       console.log("Invalid Email",error)
    }
   
  }
  return (
    <div className='w-full  h-screen flex items-center justify-center '>
    <form  className='flex flex-col gap-2  shadow-md shadow-slate-600 rounded w-1/4 p-4' onSubmit={handleSubmit}>
      <h1 className='text-center font-semibold text-3xl'>LOG IN</h1>
      <hr className='h-[2px] bg-black rounded' />
        <label className='font-medium' for="email">Email:</label>
        <input className=' px-2 py-1 rounded border border-gray-500 focus:border-2 focus:border-green-500' onChange={handleChange} value={userData.email} type="email" id="email" name="email" required/>
        <label className='font-medium' for="password">Password:</label>
        <input className='px-2 py-1 rounded border border-gray-500 focus:border-2 focus:border-green-500' onChange={handleChange} value={userData.password} type="password" id="password" name="password" required/>
        <button className='bg-green-500 hover:bg-green-700 text-white font-medium py-2 rounded my-4'>Log In</button>
        <p className='text-center'>Don't have an account ? <Link to='/signup' className='font-medium text-blue-600 cursor-pointer'>Signup</Link></p>
    </form>
</div>
  )
}

export default Login