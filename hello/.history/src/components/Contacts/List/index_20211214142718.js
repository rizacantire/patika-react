import React from 'react'

function ContactList({contacts}) {
    return (
        <div> <ul>
            {contacts.map(c=>(
               
                    `<li>${c.fullname}</li>
                    <li>${c.phone_number}</li>`
               
                
            ))} </ul>
        </div>
    )
}

export default ContactList
