import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Link} from 'react-router-dom';

//<Link href='#contact'>Contato</Link>
//<Link to="/">Home</Link>

export default class Nav extends React.Component {

    render(){
        return(
            <nav className="nav">
                <AnchorLink href='#home' offset='200'>Home</AnchorLink>
                <AnchorLink href='#photo'>Fotos</AnchorLink>
                <AnchorLink href='#information'>Informações</AnchorLink>
                <Link to="/contato">Contato</Link>
            </nav>
        );
    }
}