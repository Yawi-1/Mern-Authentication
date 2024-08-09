import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Navbar from './Navbar';
import UserCard from './UserCard';
const Home = () => {
  const [allUsers,setAllUsers] = useState([]);

  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('loggedInUser')
    toast.info('Logged Out Successfully....')
    setTimeout(()=>{
      navigate('/')
    },1000)
  }

  const fetchAllUsers=async ()=>{
   try {
    const url = 'http://localhost:3000/users'
    const res = await fetch(url);
    const data = await res.json();
    setAllUsers(data);
   } catch (error) {
    console.log(error);
   }
    }

    useEffect(()=>{
      fetchAllUsers();
    },[allUsers])
 
  return (
    <>
    <Navbar logout={logout}/>
    <div className='w-[80%] mx-auto'>
      {
        allUsers && allUsers.map((user,index)=>{
          return <UserCard key={index} user={user} />
        })
      }
      
    </div>
    </>
  )
}

export default Home