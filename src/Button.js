import React from 'react';

function Button(props){
    return(
        <button 
        className={props.class}
        type = {props.type} 
        onClick={props.handleClick}>
            {props.name}
        </button>
    )
}

export default Button