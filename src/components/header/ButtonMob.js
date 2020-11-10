import React from 'react';
import MLenu from '../../assets/img/Menu.png';

export default class ButtonMob extends React.Component {

    constructor(){
        super();
        this.state={
            visNav:'flex'
        }
    }

    clickMe(){
        if(this.state.visNav === 'flex'){
            this.setState({
                visNav:'none'
            });
        }else{
            this.setState({
                visNav:'flex'
            })
        }
        document.querySelector(".nav").style.display=this.state.visNav;
    }

    render(){
        return(
            <nav className="buttonMob" onClick={this.clickMe.bind(this)}>
                <img className="MLenu" src={MLenu} alt="DougFlix menu" />
            </nav>
        );
    }
}