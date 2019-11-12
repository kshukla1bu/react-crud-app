import React, {PureComponent} from 'react';
import Header from './Header';
import InputField from './InputField';
import SelectState from './SelectState'
import Button from './Button';

class AddContact extends PureComponent{

    state = {
        contact : {
            name: '',
            email: '',
            phone: '',
            DOB: '',
            state: ''
        }
    }


    handleSubmit = (e) => {
        e.preventDefault()
        if(this.props.onCreateContact) {
        this.props.onCreateContact(this.state.contact)
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


    render(){
        return(
            <div className='Form'>
                <form onSubmit = {this.handleSubmit} className = 'add-contact-form'>
                <Header title='Add a new Contact'/>
                <InputField type='text' ph='Name' name = 'name' value = {this.state.contact.name} handleChange = {this.handleEverything}/><br/>
                <InputField type='text' ph='Email' name = 'email' value = {this.state.contact.email} handleChange = {this.handleEverything}/><br/>
                <InputField type='text' ph='Phone' name = 'phone' value = {this.state.contact.phone} handleChange = {this.handleEverything}/><br/>
                <InputField type='date' ph='Date' name = 'DOB' value = {this.state.contact.DOB} handleChange = {this.handleEverything}/><br/>
                <SelectState name = {'state'} value = {this.state.contact.state} handleChange = { this.handleEverything } />
                <Button classN ='add-contact' type='submit' name = 'Add Contact'></Button>
                </form>	
            </div>   
        )
    }
}

export default AddContact;