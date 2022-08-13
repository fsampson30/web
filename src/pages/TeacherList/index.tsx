import React from "react";
import PageHeader from "../../components/PageHeader/indes";

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>
            <main>
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
            </main>

        </div>
    )
}

export default TeacherList;