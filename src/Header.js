import React from 'react';


function Header(props){
    return(
        <div>
            <h2>
                <center>{props.title}</center>
            </h2>
        </div>
    )
}

export default Header