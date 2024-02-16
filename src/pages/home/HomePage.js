import React, { useContext, useEffect } from 'react'
import { appContext } from '../../context/AppContext';

const HomePage = () => {
  const { isLoggedIn } = useContext(appContext);
  
  return (
    <div>HomePage</div>
  )
}

export default HomePage