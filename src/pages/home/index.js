import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2, FiDatabase } from 'react-icons/fi';
import api from '../../services/api';
import nutrilogo from "../../assets/nutrilogo.svg";

export default function Home(){
    const [users, setUsers] = useState([]);
    const history = useHistory();

    //console.log(Token);

    useEffect(() => {
        async function loadUsers(){
            const Token = localStorage.getItem('token');
            const response = await api.get('users', {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });

            setUsers(response.data);
        }

        loadUsers();
    }, [users]);

    async function deleteUser(id){
        const Token = localStorage.getItem('token');
        await api.delete(`users/${id}`, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        });

        alert('usuario deletado')

        history.push('/home');
    }

    function menu(id, userName){
        localStorage.setItem('user_id', id);

        localStorage.setItem('user_name', userName);

        history.push('users/menu');
    }

    function criar(id){
        localStorage.setItem('user_id', id);

        history.push('users/menu/new');
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');

    }

    return(
        <div className="profile-conteiner">
            <header>
                <img src={nutrilogo} alt="Logo" />

                <Link className="button" to="/users/new">Cadrastar novo Paciente</Link>
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

                        <button className="btt" type="button">
                            <FiDatabase size={20} color="#a8a8b3"/>
                        </button>

                        <button className="add" onClick={() => menu(users.id, users.userName)}>
                            Cardapios
                        </button>

                        <button className="add2" onClick={() => criar(users.id)}>
                            Criar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}