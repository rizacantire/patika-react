import React from 'react'

function ContactList({contacts}) {
    return (
        <div>
            {contacts.map(c=>(
                `${c.fullname}`
            ))}
        </div>
    )
}

export default ContactList
