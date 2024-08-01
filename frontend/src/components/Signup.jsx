import React, { useState } from 'react'

const Signup = () => {

     const [userData,setUserData] = useState({
        username: "",
        email: "",
        password: "",
     });

     const handleChange = (e)=>{
        const {name,value} = e.target;
       setUserData({...userData,[name]:value});
     }

      const handleSubmit = async (e)=>{
        const url = 'http://localhost:3000/auth/signup';
           e.preventDefault();
           const response = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
                body : JSON.stringify(userData),
           });
           const result = await response.json();
           alert(result.message);
      }
  return (
    <div className='w-full h-screen flex items-center justify-center '>
    <form  className='flex flex-col gap-2  shadow-md shadow-slate-600 rounded w-1/4 p-4' onSubmit={handleSubmit}>
        <label className='font-medium' for="username">Username:</label>
        <input className='px-2 py-1 rounded border border-gray-500 focus:border-2 focus:border-green-500' onChange={handleChange} value={userData.username} type="text" id="username" name="username" required/>
        <label className='font-medium' for="email">Email:</label>
        <input className=' px-2 py-1 rounded border border-gray-500 focus:border-2 focus:border-green-500' onChange={handleChange} value={userData.email} type="email" id="email" name="email" required/>
        <label className='font-medium' for="password">Password:</label>
        <input className='px-2 py-1 rounded border border-gray-500 focus:border-2 focus:border-green-500' onChange={handleChange} value={userData.password} type="password" id="password" name="password" required/>
        <button className='bg-green-500 hover:bg-green-700 text-white font-medium py-2 rounded my-4'>Sign Up</button>
    </form>
</div>
  )
}

export default Signup