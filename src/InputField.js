import React, {PureComponent} from 'react';


class InputField extends PureComponent{
    

    render(){
        const { type, ph, name, value, handleChange } = this.props
    return(
        <div className='input'>
            <input 
                type={ type } 
                placeholder={ ph } 
                name = {name}
                value = {value}
                onChange = {handleChange}
            />
        </div>    
    )
    }
}

export default InputField;