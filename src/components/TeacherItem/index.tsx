import React from "react";

import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import './styles.css';

function TeacherItem(){
    return (
    <article className="teacher-item">
    <header>
        <img src="https://avatars.githubusercontent.com/u/71216861?v=4" alt="Flavio Sampson" />
        <div>
            <strong>Flavio Sampson</strong>
            <span>Química</span>
        </div>
    </header>
    <p>Exemplo de texto</p>
    <footer>
        <p>Preço/hora
            <strong>R$ 80,00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
        </button>
    </footer>
</article>
    );
}

export default TeacherItem;