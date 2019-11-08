import React from 'react';


function InputField(props){
    return(
        <div className='input'>
            <input 
                type={ props.type } 
                placeholder={ props.ph } 
                name = {props.name}
                value = {props.value}
                onChange = {props.handleChange}
            />
        </div>    
    )
}

export default InputField;