import React from 'react';
import Address from './header/Address';
import ButtonMob from './header/ButtonMob';
import Logo from './header/Logo';
import Nav from './header/Nav';

export default class Header extends React.Component {

    render(){
        return(
            <nav className="header">
                <Nav />
                <ButtonMob />
                <Logo />
                <Address />
            </nav>
        );
    }
}