import './recipi.css'
import NavBar from './NavBar'
import Fav from './Fav'
import Details from './Details'
import Home from './Home'
import React from 'react'
import { Route ,Routes} from 'react-router-dom'

function Recipi() {
  return (
    <div className='container5'>

        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/fav' element={<Fav/>}/>
            <Route path='/details/:id' element={<Details/>}/>
        </Routes>

    </div>
  )
}

export default Recipi