import React, {Component} from 'react';
import Header from './Header';
//import SelectState from './SelectState';
//import InputField from './InputField'
//import Button from './Button';
import serializeForm from 'form-serialize'

class AddContact extends Component{

    state = {
        SelectedValue : 'none'
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true });
        console.log(values)
        if(this.props.onCreateContact) {
        this.props.onCreateContact(values)
        }
    }

    onClick = (e) => {
        this.setState({SelectedValue: e.target.value});
      }

    render(){
        return(
            <div className='Form'>
                <form onSubmit = {this.handleSubmit} className = 'add-contact-form'>
                <Header title='Add a new Contact'/>
                <input type='text' placeholder='Name' name = 'name'/><br/>
                <input type='text' placeholder='Email' name = "email"/><br/>
                <input type='text' placeholder='Phone' name = "phone"/><br/>
                <input type='date' placeholder='Date' name = "DOB"/><br/>
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
                <button>Add Contact</button>
                </form>	
            </div>   
        )
    } */
}

export default AddContact;