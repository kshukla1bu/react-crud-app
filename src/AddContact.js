import React, {Component} from 'react';
import Header from './Header';
import InputField from './InputField';
import SelectState from './SelectState'
import Button from './Button';

class AddContact extends Component{

    state = {
        SelectedValue : 'none',
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
      //  const values = serializeForm(e.target, { hash: true });
        if(this.props.onCreateContact) {
        this.props.onCreateContact(this.state.contact)
        }
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

    onClick = (e) => {
        this.setState({SelectedValue: e.target.value});
      }

    render(){
        return(
            <div className='Form'>
                <form onSubmit = {this.handleSubmit} className = 'add-contact-form'>
                <Header title='Add a new Contact'/>
                <InputField type='text' ph='Name' name = 'name' value = {this.state.contact.name} handleChange = {this.handleName}/><br/>
                <InputField type='text' ph='Email' name = 'email' value = {this.state.contact.email} handleChange = {this.handleEmail}/><br/>
                <InputField type='text' ph='Phone' name = 'phone' value = {this.state.contact.phone} handleChange = {this.handlePhone}/><br/>
                <InputField type='date' ph='Date' name = 'DOB' value = {this.state.contact.DOB} handleChange = {this.handleDOB}/><br/>
                <SelectState name = {'state'} value = {this.state.contact.state} handleChange = { this.handleState } />
                <Button class ='add-contact' type='submit' name = 'Add Contact'></Button>
                </form>	
            </div>   
        )
    }

    /*
    render(){
        return(
            <div className='Form'>
                <form onSubmit = {this.handleSubmit} className = 'add-contact-form'>
                <Header title='Add a new Contact'/>
                <InputField type='text' ph='Name' name = 'name' for='add'/>
                <InputField type='text' ph='Email' name = "email" for='add'/>
                <InputField type='text' ph='Phone' name = "phone" for='add'/>
                <InputField type='date' ph='Date' name = "DOB" for='add'/>
                <SelectState onClick = { this.getValue} />
                <select value = {this.state.SelectedValue} name = 'state' onChange = {this.onClick}>
                    <option value="none" disabled >None Selected</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="District Of Columbia">District Of Columbia</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                </select><br/>
                <button>Add Contact</button>
                </form>	
            </div>   
        )
    } 
    <Button class ='add-contact' type='submit' handleChange = {this.handleSubmit}>*/
}

export default AddContact;