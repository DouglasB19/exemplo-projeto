import React from 'react';
import Contact from './Main/Contact';
import Information from './Main/Information';
import Maps from './Main/Maps';
import Slide from './Main/Slide';

export default class Main extends React.Component {

    render(){
        return(
            <nav className="main">
                <Slide />
                <Information />
                <Maps />
                <Contact />
            </nav>
        );
    }
}