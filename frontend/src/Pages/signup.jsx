import React from 'react'
import { addUsers } from './ApiCalls';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {

    const navigate = useNavigate();

    const [form,setform] = useState(
        {
        username:'',
        email:'',
        password:''
    });


    const [error,seterror] = useState(null);
    const [loading,setloading] = useState(false);

    const handleSubmit  = async (e) => {
        e.preventDefault();
        setloading(true);
        try{
            console.log(form);
            const response = await addUsers(form);
            if(response.data.success){
                navigate('/login');
            }
            if(response){
                setloading(false);
                console.log(response.data.message);
            }
        }catch(e){
            setloading(false);
            seterror(e);
        }
        
    }

    const handleChange = (e) => {
        setform({...form, [e.target.name]:e.target.value})
    }

    

  return (
    <div style={{textAlign:"center"}}>

        <form  onSubmit={handleSubmit}>
        <input name='username' value={form.username} placeholder='enter username' onChange={handleChange}  />
        <input name='email' value={form.email} placeholder='enter youre email' onChange={handleChange}  />
        <input  name='password' value={form.password} placeholder='enter your password' onChange={handleChange} />
        <button type='submit'>submit</button>
        </form>

        <div onClick={()=>{navigate('/login')}}>
            already register ?
        </div>

        <div>
            {loading ? "Loading..." : ''}
        </div>
    </div>
  )
}

export default Signup