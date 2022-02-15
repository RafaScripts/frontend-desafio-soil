import React, { useState } from 'react';
import {FiLogIn} from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';
import nutri from '../../assets/nutri.png';

export default function Logon({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await api.post('sessions', { email, password });

            sessionStorage.setItem('token', response.data.token);
            localStorage.setItem('provider', response.data.user.provider);
            localStorage.setItem('my_ID', response.data.id);


            history.push('/home');

        }catch (err) {
            alert("dados invalidos!");
        }


    }
    return (
        <div className="logon-conteiner" >
            <section className="form">
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
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
                        Entrar</button>


                </form>
            </section>

            <img src= {nutri} alt="nutri" />
        </div>
    );
}

