import React from 'react'

function ContactList({contacts}) {
    return (
        <div>
            {contacts.map(c=>(
                <ul>
                    <li>{c.fullname}</li>
                    <li>{c.phone_number}</li>
                </ul>
                
            ))}
        </div>
    )
}

export default ContactList
