import React, { useState } from 'react'
import { addQuestion } from './ApiCalls';

function Admin() {

  const [input, setinput] = useState({
     question:'',
     options:[],
     answer:''
  });
  const [option,setoption] = useState('');
  const [loading,setloading] = useState(false);
  const [error,seterror] = useState(null);
  const [data,setdata] = useState({});

  const handleChange = (e) => {

     setinput({...input, [e.target.name]:e.target.value});

  }
  const handleOptionsChange = (e) => {
      setoption(e.target.value);
  }

  const handleAddOption = (e) =>{
    e.preventDefault();
    setinput(prevState => ({
      ...prevState,
      options: [...prevState.options, option]
    
    }));
    setoption('');
  }

  const handleSubmit = async () => {

    setloading(true);

    try{
      const response = await addQuestion(input);
      if(response){
        setloading(false);
        setdata(response.data);
      }
    }catch(e){
      setloading(false);
      seterror(e);
    }
  }

  

  return (
    <div>
        <div style={{display:"flex",gap:"20px", justifyContent:"center"}}>
        <input placeholder='search' />
        <button>search</button>
        </div>

        <div style={{marginTop:"20px", }}>

            <form style={{display:"flex",gap:"20px", justifyContent:"center"}} >

            <textarea type='textarea' name='question' onChange={handleChange} placeholder='enter question' />
            
            <input name='options' value={option} onChange={handleOptionsChange} placeholder='enter options' />
            <button onClick={handleAddOption}>add option</button>
            <input name='answer' onChange={handleChange} placeholder='enter answer A,B,C,D '/>
          
            </form>

            <div style={{width:"100%", height:"auto", marginTop:" 30px", padding:"10px", border:"solid 2px grey"}}>
              <div>{input.question}</div>
              <div>
                {
                  input.options.map((opt,_)=><li>{opt}</li>)
                }
              </div>
              <div>{input.answer}</div>
            </div>
            <button onClick={handleSubmit}>Save Question</button>
            {
              loading ? 'Loading...' : ''
            }
        </div>
    </div>
  )
}

export default Admin