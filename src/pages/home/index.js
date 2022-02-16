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

<<<<<<< HEAD
    async function deleteUser(id){
        const response = await api.delete(`users/${id}`)

        alert(response.data.delete)

        history.push('/home')
    }

    async function updateUser(id){
        localStorage.setItem('id_user', id);

        history.push('/users/edit');

    }

    function handleLogout() {
        localStorage.clear();
=======
>>>>>>> parent of bd93b52... update

    }, [token]);


    return(
<<<<<<< HEAD
        <div className="profile-conteiner">
            <header>
                <img alt="Logo" />
                <span>Bem Vindo</span>

                <Link className="button">Cadrastar novo Paciente</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#1dcd81" />
                </button>
            </header>

            <h1>Lista de Pacientes</h1>

            <ul>
                {users.map(users => (
                    <li key={users.id}>
                        <span>ID: {users.id}</span><br/>
                        <span> Nome: {users.userName}</span><br/>
                        <span> Email: {users.email}</span>



                        <button className="btw" type="button" onClick={() => deleteUser(users.id)}>
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>

                        <button className="btt" type="button" onClick={() => updateUser(users.id)}>
                            <FiDatabase size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}
            </ul>
=======
        <div>

>>>>>>> parent of bd93b52... update
        </div>
    );
}