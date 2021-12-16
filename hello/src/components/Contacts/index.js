import React, { useEffect, useState } from 'react'
import Form from './Form'
import ContactList from './List'
function Contacts() {
    const [contacts, setContacts] = useState([{fullname:"Rıza Can",phone_number:5552132330}])
    useEffect(()=>{
        console.log(contacts);
    },[contacts])
    return (
        <div id="container">
            <ContactList contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts
