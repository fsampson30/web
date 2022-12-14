import React from "react";

import { Link } from "react-router-dom";
import logoImg from '../../assets/images/logo.png'
import backIcon from '../../assets/images/icons/back.png'

import './styles.css';

interface PageHeaderProps {
    title: string;    
    description?: string;
    children: React.ReactNode
}

const PageHeader: React.FunctionComponent<PageHeaderProps> =  (props) => {
    return(
        <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="Voltar" />
            </Link>
            <img src={logoImg} alt="Proffy" />
        </div>
        <div className="header-content">
            <strong>{props.title}</strong>
            {props.children}
            {props.description && <p>{props.description}</p>}
        </div>
        
    </header>

    );
}

export default PageHeader;