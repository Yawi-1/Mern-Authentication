import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {

  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('loggedInUser')
    setTimeout(()=>{
      navigate('/login')
    },1000)

  }
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <button onClick={logout} className='px-4 py-2 bg-red-500 text-white font-bold rounded-md'>Logout</button>
    </div>
  )
}

export default Home