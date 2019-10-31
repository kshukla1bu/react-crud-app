import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from './Button'

class Contact extends Component{

    static propTypes = {
        contact: PropTypes.object.isRequired,
        remove: PropTypes.func.isRequired
     }

    render(){
        const { contact, remove } = this.props
        return(
            <div className='contact'>
                {contact.name}<br/>
                {contact.email}<br/>
                {contact.phone}<br/>
                {contact.DOB}<br/>
                {contact.state}<br/>
                <Button 
                contact = {contact}
                class = 'contact-remove' 
                name = 'Remove' 
                handleClick = {remove}/><br/>    
            </div>
        )
    }
}

export default Contact;

