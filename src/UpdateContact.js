import React, {Component} from 'react';
import Header from './Header';
//import SelectState from './SelectState';
//import InputField from './InputField'
//import Button from './Button';
import PropTypes from 'prop-types'
import serializeForm from 'form-serialize'


class UpdateContact extends Component{

    state = {
        contact : {name:'',
                    email:'',
                    phone:'',
                    DOB:'',
                    state:'none'}            
    }
    
    static propTypes = 
    {
        contacts: PropTypes.array.isRequired,
    } 
    
    onClickState = (e) => {
        this.setState({contact : {state: e.target.value}});
    }

    onClickName = (e) => {
        this.setState({contact : {name: e.target.value}});
    }

    onClickPhone = (e) => {
        this.setState({contact : {email: e.target.value}});
    }

    onClickEmail = (e) => {
        this.setState({contact : {phone: e.target.value}});
    }

    onClickEmail = (e) => {
        this.setState({contact : {DOB: e.target.value}});
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true });
        if(this.props.onEditContact) {
        this.props.onEditContact(values)
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
                <select value = { this.state.contact.name === '' ? 'none' :this.state.contact.name} 
                onChange = {(e) => this.handleSelect(e.target.value) }>
                    <option key = {(Math.random()*32).toString()} value="none" >None Selected</option>
                    {
                        contacts.map((c, index) => (
                            <option key = {(Math.random()*index).toString()} value={c.name} >{c.name}</option>
                        ))
                    }
                </select> <br/>   
                <input type='text' name='name' value = { this.state.contact.name } onChange = {this.onClickName}/> <br/>
                <input type='text' name='email' value = { this.state.contact.email } onChange = {this.onClickEmail}/> <br/>
                <input type='text' name='phone' value = { this.state.contact.phone } onChange = {this.onClickPhone}/> <br/>
                <input type='date' name='DOB' value = { this.state.contact.DOB } onChange = {this.onClickDOB}/> <br/>
                <select value = {this.state.contact.state} name = 'state' onChange = {this.onClickState}>
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
                <button className='editContact' name='Edit'>Update</button>
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