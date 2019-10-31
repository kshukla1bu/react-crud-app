import React from 'react';

function doNothing(){
    return
}

function InputField(props){
    return(
        <div className='input'>
            <input 
                type={ props.type } 
                placeholder={ props.ph } 
                name = {props.name}
                //value = { props.for === 'edit' ? props.value : ''}
                onChange = {doNothing}
            />
        </div>    
    )
}

export default InputField;