import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Contact from './Contact'

class ListContacts extends Component{
    
    static propTypes = 
    {
        contacts: PropTypes.array.isRequired,
        removeCont: PropTypes.func.isRequired
    }
    
    render(){
        const {contacts, removeCont} = this.props
        return(
            <div align='center'>
                <ul>
                    {   
                        contacts.map((contact, index) => (
                            <div key = {(Math.random()*index).toString()}>
                                <hr/>
                                    <li>
                                        <Contact
                                        contact = { contact }
                                        remove = { removeCont }
                                        />
                                    </li>
                                <hr/>
                            </div>
                        ))
                    }
                </ul>
            </div>    
        )
    }
}

export default ListContacts