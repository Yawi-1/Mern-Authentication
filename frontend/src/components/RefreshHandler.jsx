import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RefreshHandler = ({ setIsAuth }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tokenFromURL = urlParams.get('token');
    const localToken = localStorage.getItem('token');

    // 1. If token is present in the URL (Google Sign-In case)
    if (tokenFromURL) {
      localStorage.setItem('token', tokenFromURL);
      setIsAuth(true);

      // Clean up the URL
      navigate('/home', { replace: true });
      return;
    }

    // 2. If token already in localStorage (normal login case)
    if (localToken) {
      setIsAuth(true);

      if (location.pathname === '/' || location.pathname === '/signup') {
        navigate('/home', { replace: false });
      }
    }
  }, [location, navigate, setIsAuth]);

  return null;
};

export default RefreshHandler;
