import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrent } from './ApiCalls';

function Quiz() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    // Fetch user data and handle authentication

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
            // Redirect if no token found
            navigate('/login');
            return;
        }

        // Fetch the current user
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
    }, [navigate]);  // Only run when the component mounts

    // Handle user logout
    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    };

    // Handle errors
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Show a loading state before the user data is available
    return (
        <div>
            
            {user ? <h2>Welcome, <span style={{cursor:"pointer"}} onClick={handlePermission}>{user.username}</span></h2> : <p>Loading user data...</p>}
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
}

export default Quiz;
