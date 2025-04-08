import React from 'react'

const Navbar = ({logout}) => {
    const username = localStorage.getItem('loggedInUser');
  return (
        <nav className="w-full flex items-center justify-between px-12 h-12 shadow-md py-8">
            <h1 className='font-bold text-2xl'>MERN-AUTH</h1>
            <div className='flex items-center gap-4 font-semibold'>
             <p>{username}</p>
             <button onClick={logout} className='bg-red-500 rounded-full px-4 py-1  text-white'>Log Out</button>
            </div>
        </nav>
  
  )
}

export default Navbar