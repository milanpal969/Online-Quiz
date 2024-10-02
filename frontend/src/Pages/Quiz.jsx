import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrent } from './ApiCalls';

function Quiz() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);


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
        </div>
    );
}

export default Quiz;
