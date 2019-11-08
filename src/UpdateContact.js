import React, {Component} from 'react';
import Header from './Header';
import PropTypes from 'prop-types'
import SelectState from './SelectState';
import Select from './Select';
import InputField from './InputField';
import Button from './Button';


class UpdateContact extends Component{

    state = {
        contact : {
                    name:'',
                    email:'',
                    phone:'',
                    DOB:'',
                    state:'none'
                }            
    }
    
    static propTypes = 
    {
        contacts: PropTypes.array.isRequired,
    } 
    
    handleName = (e) => {
        let value = e.target.value;
        this.setState(prevState => {
            return {
                contact : {
                    ...prevState.contact, name : value
                }
        }})
    }

    handleEmail = (e) => {
        let value = e.target.value;
        this.setState(prevState => {
            return {
                contact : {
                    ...prevState.contact, email : value
                }
        }})
    }

    handlePhone = (e) => {
        let value = e.target.value;
        this.setState(prevState => {
            return {
                contact : {
                    ...prevState.contact, phone : value
                }
        }})
    }

    handleDOB = (e) => {
        let value = e.target.value;
        this.setState(prevState => {
            return {
                contact : {
                    ...prevState.contact, DOB : value
                }
        }})
    }

    handleState = (e) => {
        let value = e.target.value;
        this.setState(prevState => {
            return {
                contact : {
                    ...prevState.contact, state : value
                }
        }})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.props.onEditContact) {
        this.props.onEditContact(this.state.contact)
        }
    }

    handleSelect = (name) => {
       for(let i = 0 ; i < this.props.contacts.length ; i++)
       {
            if (this.props.contacts[i].name === name )
            {
                    this.setState(() => (
                        { contact : this.props.contacts[i] }                
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
                <InputField type='text' ph='Name' name = 'name' value = {this.state.contact.name} handleChange = {this.handleName}/><br/>
                <InputField type='text' ph='Email' name = 'email' value = {this.state.contact.email} handleChange = {this.handleEmail}/><br/>
                <InputField type='text' ph='Phone' name = 'phone' value = {this.state.contact.phone} handleChange = {this.handlePhone}/><br/>
                <InputField type='date' ph='Date' name = 'DOB' value = {this.state.contact.DOB} handleChange = {this.handleDOB}/><br/>
                <SelectState name = {'state'} value = {this.state.contact.state} handleChange = { this.handleState }/><br/>
                <Button class ='edit-contact' type='submit' name = 'Update Contact'></Button>
                </form>	
            </div>   
        )
    }

 /*   render(){
        const { contacts } = this.props
        return(
            <div className='Form'>
                <form>
                <Header title='Update Contact'/>
                Select a contact to update<br/>
                <select  value = {this.state.contact.name} 
                onChange = {(e) => this.handleSelect(e.target.value) }>
                    <option key = {(Math.random()*32).toString()} value="none" disabled >None Selected</option>
                    {
                        contacts.map((c, index) => (
                            <option key = {(Math.random()*index).toString()} value={c.name} >{c.name}</option>
                        ))
                    }
                </select>    
                <InputField type='text' name='name' for='edit' value = { this.state.contact.name }/>
                <InputField type='text' name='email' for='edit' value = { this.state.contact.email }/>
                <InputField type='text' name='phone' for='edit' value = { this.state.contact.phone }/>
                <SelectState/>
                <Button class='editContact' name='Edit Contact'/>
                </form>	
            </div>   
        )
    } */
}

export default UpdateContact;