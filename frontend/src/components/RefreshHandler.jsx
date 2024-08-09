import React, { useEffect } from 'react'
import { replace, useLocation,useNavigate } from 'react-router-dom'
const RefreshHandler = ({setIsAuth}) => {
    const location = useLocation();
    const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('token') != null){
        setIsAuth(true);
        if(location.pathname == '/' || location.pathname=='/signup'){
            navigate('/home',{replace:false})
        }
    }
   
  },[location,navigate,setIsAuth])
  return (
    null
  )
}

export default RefreshHandler