import React, {PureComponent} from 'react';


class Header extends PureComponent{
    
    render(){
        const { title } = this.props
    return(
        <div>
            <h2>
                <center>{title}</center>
            </h2>
        </div>
    )
    }
}

export default Header