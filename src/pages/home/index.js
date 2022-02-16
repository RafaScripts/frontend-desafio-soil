import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2, FiDatabase } from 'react-icons/fi';
import api from '../../services/api';

export default function Home(){
    const Token = localStorage.getItem('token');
    const [users, setUsers] = useState([]);
    const history = useHistory();

    //console.log(Token);

    useEffect(() => {
        async function loadUsers(){
            const response = await api.get('users');

            setUsers(response.data);
        }

        loadUsers();
    }, []);

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

        history.push('/');

    }

    return(
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


<<<<<<< Updated upstream

                        <button className="btw" type="button" onClick={() => deleteUser(users.id)}>
=======
                        <button className="btw" type="button">
>>>>>>> Stashed changes
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>

                        <button className="btt" type="button" onClick={() => updateUser(users.id)}>
                            <FiDatabase size={20} color="#a8a8b3"/>
                        </button>

                        <button className="add">
                            Adicionar Cardapio
                        </button>

                        <button className="add2">
                            Vizualizar Cardapios
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

