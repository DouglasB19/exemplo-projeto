import React from 'react';
import LogoFooter from '../assets/img/Logo.png';

export default class Footer extends React.Component {

    render(){
        return(
            <nav className="footer">
                <div>
                    <img className="logoFooter" src={LogoFooter} alt="Logo Footer"/>
                </div>
                <div>
                    Endereço <br/>
                    Telefone <br/>
                    Email
                </div>
            </nav>
        );
    }
}