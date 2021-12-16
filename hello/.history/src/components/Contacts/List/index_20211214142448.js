import React from 'react'

function ContactList({contacts}) {
    return (
        <div>
            {contacts.map(c=>(
                <ul>
                    `<li>{c.fullname}</li>`
                </ul>
                
            ))}
        </div>
    )
}

export default ContactList
