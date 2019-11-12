import React, {PureComponent} from 'react'; 

class Select extends PureComponent {


    render(){
        const {name, value, handleChange, option } = this.props
    return(
        <div>
            <select name={name} value = {value} onChange = {handleChange}>
                <option key = {(Math.random()*32).toString()} value="none" >None Selected</option>
                    {
                        option.map((contact, index) => (
                            <option key = {(Math.random()*index).toString()} value={contact.name} >{contact.name}</option>
                        ))
                    }
             </select>   
        </div>
    )
    }
}

export default Select;