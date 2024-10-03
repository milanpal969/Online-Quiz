import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrent } from './ApiCalls';
import { getAllQuestions } from '../componets/getAllQuestions';

function Quiz() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(0);

    const handlePermission = () => {
        if (user?.isAdmin) {
            navigate('/admin');
        } else {
            navigate('/profile');
        }
    };

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
                } else {
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            } catch (error) {
                setError(error);
            }
        };

        fetchCurrentUser();

        const getAllData = async () => {
            setLoading(true);
            try {
                const response = await getAllQuestions();
                if (response.data?.data) {
                    setLoading(false);
                    setError(null);
                    setData(response.data.data);
                }
            } catch (e) {
                setLoading(false);
                setError(e);
            }
        };
        getAllData();
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
            {user ? <h2>Welcome, <span style={{ cursor: "pointer" }} onClick={handlePermission}>{user.name}</span></h2> : <p>Loading user data...</p>}
            <button onClick={handleLogout}>Log Out</button>

            {loading ? "Loading... " :
                data.length > 0 ? (
                    <div>
                        <div style={{ display: "flex", marginBottom: "10px", gap: "10px" }}>
                            <span>{index + 1}</span>
                            <div>{data[index].question}</div>
                        </div>
                        <div style={{ width: "fit-content" }}>
                            {data[index].options.map((opt, idx) =>
                                <div style={{ padding: "10px", border: "solid 2px grey" }} key={idx}>
                                    <span>{String.fromCharCode('A'.charCodeAt(0) + idx)}</span>. {opt}
                                </div>
                            )}
                        </div>
                    </div>
                ) : <p>No questions available</p>
            }

            <div style={{ display: "flex", gap: "20px" }}>
                <button onClick={() => { setIndex(index > 0 ? index - 1 : data.length - 1) }}>Prev</button>
                <button onClick={() => { setIndex(index < data.length - 1 ? index + 1 : 0) }}>Next</button>
            </div>
        </div>
    );
}

export default Quiz;
