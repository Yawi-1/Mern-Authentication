import React from 'react'

const UserCard = ({user}) => {
  return (
       <div className='flex justify-between bg-gray-400 my-8 text-white h-20 px-4 items-center rounded-md'>
        <h1 className='w-[30%] text-3xl font-bold'>{user.email}</h1>
        <p className='w-[20%] text-lg'>{user._id}</p>
        <p className='w-[20%] font-semibold'>{user.createdAt}</p>
         <button className='w-[5%] bg-blue-400 px-2 py-1 rounded-md font-medium'>Info</button>
         <button className='w-[5%] bg-green-400 px-2 py-1 rounded-md font-medium'>Edit</button>
         <button className='w-[8%] bg-red-500 px-2 py-1 rounded-md font-semibold'>Delete</button>
    </div>
  )
}

export default UserCard