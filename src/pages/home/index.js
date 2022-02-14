import React, { useState, useEfect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function home(){
    const token = localStorage.getItem('token');
    const [users, setUsers] = useState([]);

    useEfect(() => {
        api.get('users', {
            Headers: {
                Authorization: token,
            }
        }).then(response => {
            setUsers(response.data);
        })


    }, [token]);


    return(
        <div>

        </div>
    );
}