import React, {Component} from 'react';
import * as capi from './utils/capi';
import './App.css';
import ListContacts from './ListContacts'
import Header from './Header';
import Button from './Button';
import AddContact from './AddContact';
import UpdateContact from './UpdateContact';
var index

class App extends Component {
  
  state = {
    contacts:[],
    showAddContact: false,
    showUpdateContact: false,
    query: ''
    }

  componentDidMount () {
    this.setState(() =>({
      contacts : capi.getAll()
    }))
  }

  generateId(contact){
    return contact.name.substring(0,2).toLowerCase() + contact.state.substring(0,2).toLowerCase()
  }

  createContact(contact) { 
      contact.id = this.generateId(contact)
      this.setState(state => ({
        contacts: state.contacts.concat([ contact ]),
        showAddContact: false
      }))
    }

    
    editContact(contact) {
      for(const [i, obj] of this.state.contacts.entries())
      {
          if(contact.name === obj.name)
          {
              index = i
              break;
          }
          index = this.state.contacts.length
      }
      contact.DOB = capi.getDOB(contact)
      this.state.contacts.splice(index, 1,  contact)
      this.setState(state => ({
         contacts: state.contacts,
        showUpdateContact: false
      }))
    }

  removeContact = (contact) => {
    this.setState((state) => ({
      
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }

  showAddPage = () => {
    this.setState(() => ({
      showAddContact: true
    })) 
  }

  showUpdatePage = () => {
    this.setState(() => ({
      showUpdateContact: true
    })) 
  }

  render()
  {
    return (
      <div>
        {
          this.state.showAddContact ? 
          (<AddContact 
            onCreateContact = {(contact) => {
              this.createContact(contact)
            }}
            />) : 
          this.state.showUpdateContact ? (<UpdateContact contacts = { this.state.contacts }
                                            onEditContact = {(contact) => {
                                              this.editContact(contact)
                                            }}/>) :
          (
          <div>  
          <Header title='My Contacts'/>
          <Button class = 'contact-edit' type = 'button' handleClick = {this.showUpdatePage}/>
          <Button class = 'contact-add' type = 'button' handleClick = {this.showAddPage}/>
          <ListContacts 
          contacts = {this.state.contacts}
          removeCont = { this.removeContact }
          />
          
          </div>
          )
        }
      </div>
    )
  }
}

export default App;
