import React, {PureComponent} from 'react';
import Header from './Header';
import PropTypes from 'prop-types'
import SelectState from './SelectState';
import Select from './Select';
import InputField from './InputField';
import Button from './Button';


class UpdateContact extends PureComponent{

    state = {
        contact : {
            name: '',
            email: '',
            phone: '',
            DOB: '',
            state: ''
        }
    }

    
    static propTypes = 
    {
        contacts: PropTypes.array.isRequired,
    } 

    
    handleSubmit = (e) => {
        e.preventDefault()
        if(this.props.onEditContact) {
        this.props.onEditContact(this.state.contact)
        }
    }

    handleEverything = (e) => {
        let value = e.target.value
        switch(e.target.name){
            case('name'):
            this.setState(prevState => {
                return {
                    contact : {
                        ...prevState.contact, name : value
                    }
            }})
                break
            case('email'):
            this.setState(prevState => {
                return {
                    contact : {
                        ...prevState.contact, email : value
                    }
            }})
            break
            case('phone'):
            this.setState(prevState => {
                return {
                    contact : {
                        ...prevState.contact, phone : value
                    }
            }})
            break
            case('DOB'):
            this.setState(prevState => {
                return {
                    contact : {
                        ...prevState.contact, DOB : value
                    }
            }})
            break
            case('state'):
            this.setState(prevState => {
                return {
                    contact : {
                        ...prevState.contact, state : value
                    }
            }})
            break
            default:
        }
    }

    handleSelect = (name) => {
       for(let i = 0 ; i < this.props.contacts.length ; i++)
       {
            if (this.props.contacts[i].name === name )
            {
                    this.setState(() => (
                        {contact : this.props.contacts[i] }                
                    )) 
                    break
            }
            else
            {
                this.setState(() => ({
                        contact : {}
                    }))
            }
        }    
    }

    render(){
        const { contacts } = this.props
        return(
            <div className='Form'>
                <form onSubmit = {this.handleSubmit} className = 'edit-contact-form'>
                <Header title='Update Contact'/>
                Select a contact to update<br/>
                <Select name = {'contact'} value = {this.state.contact.name} handleChange= {(e) => this.handleSelect(e.target.value)} option = {contacts}/><br/>   
                <InputField type='text' ph='Name' name = 'name' value = {this.state.contact.name} handleChange = {this.handleEverything}/><br/>
                <InputField type='text' ph='Email' name = 'email' value = {this.state.contact.email} handleChange = {this.handleEverything}/><br/>
                <InputField type='text' ph='Phone' name = 'phone' value = {this.state.contact.phone} handleChange = {this.handleEverything}/><br/>
                <InputField type='date' ph='Date' name = 'DOB' value = {this.state.contact.DOB} handleChange = {this.handleEverything}/><br/>
                <SelectState name = {'state'} value = {this.state.contact.state} handleChange = { this.handleEverything }/><br/>
                <Button classN ='edit-contact' type='submit' name = 'Update Contact'></Button>
                </form>	
            </div>   
        )
    }
}

export default UpdateContact;