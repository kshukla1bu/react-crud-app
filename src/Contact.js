import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from './Button'

class Contact extends Component{

    static propTypes = {
        contact: PropTypes.object,
        remove: PropTypes.func
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
                class = 'contact-remove' 
                type = 'button' 
                handleClick = {() => remove(contact)}/><br/>    
            </div>
        )
    }
}

export default Contact;

