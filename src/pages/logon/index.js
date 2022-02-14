import React, { useState } from 'react';
import {FiLogIn} from 'react-icons/fi';
import { useHistory } from "react-router-dom"
//import './styles.css';
import api from '../../services/api';

const Index = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await api.post('sessions', { email, password });

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('provider', response.data.provider);

            if(!provider){
                history.push('/home');
            }

            history.push('/users');
        }catch (err) {
            alert("dados invalidos!");
        }


    }
    return (
        <div >
            <section >
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


        </div>
    );
}

export default Index;