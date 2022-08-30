import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom"

import logoImg from '../../assets/images/logo@3x.png'
import landingImg from '../../assets/images/landing.png'

import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import purpleHeartIcon from '../../assets/images/icons/heart.png'

import './styles.css';
import api from "../../services/api";

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0)

    useEffect(() => {
        api.get('connections').then(response => {
            const {total} = response.data;
            setTotalConnections(total)
        })
    }, [])

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aula" />
                        Dar aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas. <img src={purpleHeartIcon} alt="Coração Roxo" />
                </span>
            </div>
        </div>
    )
}

export default Landing;