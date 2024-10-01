import React, { useEffect, useState } from 'react'

function SearchRecommendation() {

    const [users,setusers] = useState([]);
    const [loading,setloading] = useState(false);
    const [error,seterror] = useState(null);
    const [values,setvalue] = useState('');
    const [result,setresult] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            setloading(true);

            try{
                const response = await fetch("https://dummyjson.com/users");
                const data = await response.json();

                if(data && data.users && data.users.length>0){
                    setloading(false);
                    seterror(null)
                    setusers(data.users.map((name => name.firstName.toLowerCase())));
                }
            }catch(e){
                setloading(false);
                seterror(e.message);
            }
        }
        fetchData();
    },[])

    if(error){
        return <div>{error}</div>
    }

    function handleChange(e){
        const query = e.target.value.toLowerCase();
        setvalue( e.target.value.toLowerCase())
        if(query.length>0){
        const filteredData = users.filter(user => 
            user.toLowerCase().indexOf(query) > -1
        );
        setresult(filteredData);
    }else{
        setresult([]);
    }

    }

    function handleOnclick(e){
        setresult([]);
        setvalue(e.target.innerText)
    }
  return (
    <div>
        {console.log(users,result)}
        <div>
        <input type='text' value={values} onChange={handleChange}></input>
        </div>
        <ul>
            {
                result.map(nam => <li onClick={handleOnclick}>{nam}</li>)
            }
        </ul>
        
    </div>
  )
}

export default SearchRecommendation