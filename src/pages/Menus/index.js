import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2, FiDatabase } from 'react-icons/fi';
import api from '../../services/api';
import nutrilogo from "../../assets/nutrilogo.svg";

export default function Menus(history){
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('user_name');
    const [ menu, setMenu ] = useState([]);

    //console.log(Token);

    useEffect(() => {
        async function loadMenus(){
            const id = localStorage.getItem('user_id')
            const response = await api.get(`users/menu/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            setMenu(response.data);
        }

        loadMenus();
    }, [menu]);

    async function deleteMenu(id){
        await api.delete(`users/menu/del/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        alert('cardapio deletado')
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');

    }

    return(
        <div className="profile-conteiner">
            <header>
                <img src={nutrilogo} alt="Logo" />
                <span>Bem Vindo</span>

                <Link className="button" to="/home">Voltar</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#1dcd81" />
                </button>
            </header>

            <h1>Cardapios de {name}</h1>

            <ul>
                {menu.map(menu => (
                    <li key={menu.id}>
                        <p>ID: {menu.id}</p><br/>
                        <p> Semana: {menu.week}</p><br/>
                        <p> Horario: {menu.time}</p><br/>
                        <p>Proteina: {menu.protein}</p><br/>
                        <p> Carboidrato: {menu.carb}</p><br/>
                        <p> Vegetais: {menu.vegetal}</p><br/>
                        <p> Verduras: {menu.greens}</p><br/>
                        <p> frutas: {menu.fruits}</p>

                        <button className="btw" type="button" onClick={() => deleteMenu(menu.id)}>
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}