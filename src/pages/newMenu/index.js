import React, { useState } from 'react';
import {FiLogIn, FiArrowLeft} from 'react-icons/fi';
import {Link} from "react-router-dom";
import './styles.css';
import api from '../../services/api';
import nutrilogo from "../../assets/nutrilogo.svg";

export default function NewMenus(history) {
    const id = localStorage.getItem('user_id');
    const token = localStorage.getItem('token');
    const [week, setWeek] = useState('');
    const [time, setTime] = useState('');
    const [protein, setProtein] = useState('');
    const [carb, setCarb] = useState('');
    const [vegetal, setVegetal] = useState('');
    const [greens, setGreens] = useState('');
    const [fruits, setFruits] = useState('');

    const data = {
        week,
        time,
        protein,
        carb,
        vegetal,
        greens,
        fruits
    }

    async function create(e) {
        e.preventDefault();


        await api.post(`users/menu/${id}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        alert('Cardapio cadastrado');

        history.push('/home');


    }

    return (
        <div className="new-incident-conteiner">
            <div className="content">
                <section>
                    <img className="logg" src={nutrilogo} alt="Logo" />

                    <h1>Cadrastar Novo Cardapio</h1>
                    <p>Escreva em detalhes o cardapio para seu paciente.</p>

                    <Link className="back-link" to="/home">
                        <FiArrowLeft size={16} color="#1dcd81" />
                        Voltar para Home
                    </Link>
                </section>
                <form onSubmit={create}>
                    <input
                        placeholder="Semana"
                        value={week}
                        onChange={e => setWeek(e.target.value)}
                    />

                    <input
                        placeholder="Horario"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />

                    <input
                        placeholder="Proteina (lembre de colocar a quantidade)"
                        value={protein}
                        onChange={e => setProtein(e.target.value)}
                    />

                    <input
                        placeholder="Carboidratos (lembre de colocar a quantidade)"
                        value={carb}
                        onChange={e => setCarb(e.target.value)}
                    />

                    <input
                        placeholder="Vegetais (lembre de colocar a quantidade)"
                        value={vegetal}
                        onChange={e => setVegetal(e.target.value)}
                    />

                    <input
                        placeholder="Verduras (lembre de colocar a quantidade)"
                        value={greens}
                        onChange={e => setGreens(e.target.value)}
                    />

                    <input
                        placeholder="Frutas (lembre de colocar a quantidade)"
                        value={fruits}
                        onChange={e => setFruits(e.target.value)}
                    />

                    <input
                        type="date"
                    />

                    <button className="button" type="submit"><FiLogIn size={16} color= "#000" />
                        cadastrar</button>
                </form>
            </div>
        </div>
    );
}