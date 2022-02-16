import React, { useState } from 'react';
import {FiLogIn} from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';
import nutri from "../../assets/nutri.png";

export default function UserNew({ history }) {
    const token = localStorage.getItem('token');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const data = {
        userName,
        email,
        password
    }

    async function create(e) {
        e.preventDefault();

        try{
            await api.post('users', data,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            alert('usuario cadastrado');


            history.push('/home');


        }catch (err) {
            alert("dados invalidos!");
        }


    }
    return (
        <div className="logon-conteiner" >
            <section className="form">
                <form onSubmit={create}>
                    <h1>Cadastrar Paciente</h1>
                    <input
                        placeholder="Nome"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />

                    <input
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />


                    <button className="button" type="submit"><FiLogIn size={16} color= "#000" />
                        cadastrar</button>


                </form>
            </section>

            <img src= {nutri} alt="nutri" />
        </div>
    );
}