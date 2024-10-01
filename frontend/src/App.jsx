import React from "react"
import Login from "./Pages/login"
import Signup from "./Pages/signup"
import {Routes,Route, Router} from 'react-router-dom'
import Landing from "./Pages/Landing"
import Quiz from "./Pages/Quiz"
import Profile from "./Pages/Profile"
import Admin from "./Pages/Admin"



function App(){

 return <div>
      
      <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path="/quiz" element={<Quiz/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/admin" element={<Admin/>}/>

      </Routes>
        
  

 </div>
}

export default App
