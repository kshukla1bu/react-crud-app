import React, {PureComponent} from 'react';


class Button extends PureComponent{
    
    render(){ 
        const { classN, type, handleClick, name} = this.props   
    return(
        <button 
        className={classN}
        type = {type} 
        onClick={handleClick}>
            {name}
        </button>
    )
    }
}

export default Button