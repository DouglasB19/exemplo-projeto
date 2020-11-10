import React from 'react';
import InformationItem from './InformationItem';

export default class Information extends React.Component {

    render(){

        const div1={
            alt:"Excelente imóvel",
            title:"Venha nos conhecer",
            text:"Ótimo apartamento com estrutura de primeira.",
            value:"800,00"
        }

        return(
            <nav className="information">
                <div>
                    <ul>
                        <li>2 Quartos</li>
                        <li>1 Vaga de Garagem</li>
                        <li>1 Banheiro</li>
                        <li>Cozinha Americana</li>
                        <li>Ampla Sala</li>
                    </ul>
                </div>
                <div className="vantagens">
                    <InformationItem {...div1} />
                    <InformationItem alt="Excelente imóvel" title="Venha nos conhecer" text="Apartamento com preço incrível." value="500,00" />
                </div>
            </nav>
        );
    }
}