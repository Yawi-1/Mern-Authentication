import React, { useEffect, useState } from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import {Routes,Route, Navigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RefreshHandler from './components/RefreshHandler'
const App = () => {
  const [isAuth,setIsAuth] = useState(false);
 
 
  const PrivateRoute =({element})=>{
         return isAuth ? element : <Navigate to='/'/>
  }
  return (
    <>
    <RefreshHandler setIsAuth={setIsAuth}/>
    <Routes>
      <Route path="/home" element={<PrivateRoute element={<Home/>}/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={<Login/>}/>
      {/* <Route path="*" element={<PrivateRoute element={<Home/>}/> }/> */}
    </Routes>
    <ToastContainer/>
    </>
  )
}

export default App