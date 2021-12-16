import React, { useEffect, useState } from 'react'
import Form from './Form'
import ContactList from './List'
function Contacts() {
    const [contacts, setContacts] = useState([])
    useEffect(()=>{
        console.log(contacts);
    },[contacts])
    return (
        <div>
            <ContactList/>
            <Form addContact={setContacts}/>
        </div>
    )
}

export default Contacts
