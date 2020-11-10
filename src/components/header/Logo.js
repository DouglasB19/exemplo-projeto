import React from 'react';
import Logoo from '../../assets/img/Logo.png';

export default class Logo extends React.Component {

    render(){
        return(
            <div className="logo">
                <picture>
                    <img className="Logoo" src={Logoo} alt="Logomarca tutu" />
                </picture>
            </div>
        );
    }
}