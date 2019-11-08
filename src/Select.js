import React from 'react';

function Select(props){
    return(
        <div>
            <select name={props.name} value = {props.value} onChange = {props.handleChange}>
                <option key = {(Math.random()*32).toString()} value="none" >None Selected</option>
                    {
                        props.option.map((contact, index) => (
                            <option key = {(Math.random()*index).toString()} value={contact.name} >{contact.name}</option>
                        ))
                    }
             </select>   
        </div>
    )
}

export default Select;