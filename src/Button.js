import React from 'react';

function Button(props){
    return(
        <button className={props.class} 
        onClick={ props.class === 'contact-remove' ? () => props.handleClick(props.contact) : () => props.handleClick()} >
                {props.name}
        </button>
    )
}

export default Button