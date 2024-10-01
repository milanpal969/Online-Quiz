import React, { useState } from 'react'
import { checkUsers } from './ApiCalls';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const [form,setform] = useState(
        {
        email:'',
        password:''
    });

    const [error,seterror] = useState(null);
    const [loading,setloading] = useState(false);

    const handleSubmit  = async (e) => {
        e.preventDefault();
        setloading(true);
        try{

            const response = await checkUsers(form);
            if(response.data?.data){
                setloading(false);
                localStorage.setItem('token', response.data.data);
                if(response.data.success){
                    navigate('/quiz');
                }
            }
        }catch(e){
            setloading(false);
            seterror(e);
        }
        
    }

    const handleChange = (e) => {

        setform({...form, [e.target.name]:e.target.value})
    }

    if(error){
        return <div>{e.message}</div>
    }

    


  return (

    <div style={{textAlign:"center"}}>

        <form  onSubmit={handleSubmit}>
        <input name='email' value={form.email} placeholder='enter youre email' onChange={handleChange}  />
        <input  name='password' value={form.password} placeholder='enter your password' onChange={handleChange} />
        <button type='submit'>submit</button>

        </form>

        <div onClick={()=>{navigate('/signup')}}> 
            Didn't have account ?
         </div>

        
        <div>
            {loading ? "Loading..." : ''}
        </div>
        
    </div>
  )
}

export default Login