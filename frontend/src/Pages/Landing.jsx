import React from 'react'
import { useNavigate } from 'react-router-dom'

function Landing() {

  const navigate = useNavigate();

  const handleClick = () => {
      
    if(localStorage.getItem('token')){
      navigate('/quiz');
    }else{
      navigate('/login');
    }
  }
  return (
    <div>
      
     <button onClick={handleClick} > Start Quiz </button>


    </div>

    
  )
}

export default Landing