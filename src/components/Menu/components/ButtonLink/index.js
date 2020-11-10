import React from 'react';

function Buttonlink(props) { 
    // props => { className: "o que alguém passar", href: "/" }

    console.log(props);
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default Buttonlink;  