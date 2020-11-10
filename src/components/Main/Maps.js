import React from 'react';

export default class Maps extends React.Component {

    render(){
        return(
            <nav className="mapsLocal">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.760929548833!2d-46.662146685385316!3d-23.50511906540197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7ee6c533e2b%3A0x1aeba7352c471254!2sEtec%20Albert%20Einstein!5e0!3m2!1spt-BR!2sbr!4v1598210366056!5m2!1spt-BR!2sbr" 
                allowFullScreen></iframe>
            </nav>
        );
    }
}