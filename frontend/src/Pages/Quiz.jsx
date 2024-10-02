import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrent } from './ApiCalls';
import { getAllQuestions } from '../componets/getAllQuestions';
function Quiz() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [data,setdata] = useState([]);
    const [loading,setloading] = useState(false);


    const handlePermission = () => {

        if(user.isAdmin){
            navigate('/admin');
        }else{
            navigate('/profile');
        }
    }
    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        if (!token) {
            navigate('/login');
            return;
        }

        const fetchCurrentUser = async () => {
            try {
                const response = await getCurrent();
                if (response.data?.data) {
                    setUser(response.data.data);
                }else{
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            } catch (error) {
                setError(error);
            }
        };

        fetchCurrentUser();

        const getallData = async () => {
            setloading(true);
            try{
                const response  = await getAllQuestions();
                if(response.data.data){
                    setloading(false);
                    setError(null);
                    setdata(response.data.data);
                }
            }catch(e){
                setloading(false);
                setError(e);
            }
        }
        getallData();
    }, [navigate]);  

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            
            {user ? <h2>Welcome, <span style={{cursor:"pointer"}} onClick={handlePermission}>{user.name}</span></h2> : <p>Loading user data...</p>}
            <button onClick={handleLogout}>Log Out</button>

            {loading ? "Loading... " : 
            
            <div>

                {
                    data.map((question,index)=><div key={index}>
                        <div style={{display:"flex", marginBottom:"10px", gap:"10px"}}>
                          <span>{index+1}</span>  
                          <div>{question.question}</div>
                        </div>
                        <div style={{width:"fit-content"}}>
                        {
                            question.options.map((opt,idx)=><div style={{padding:"10px", border:"solid 2px grey"}} key={idx}>
                               <span>{String.fromCharCode('A'.charCodeAt(0) + idx)}</span>. {opt}
                                </div>)
                        }
                        </div>
                        </div>)
                }
                
            </div>
            
            
            }
        </div>
    );
}

export default Quiz;
