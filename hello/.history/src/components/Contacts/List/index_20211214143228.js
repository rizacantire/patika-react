import React from 'react'

function ContactList({contacts}) {
    return (
        <div> 

            <input placeholder='Filter Contact' />
            
            
            <ul>
            {contacts.map((c,i)=>(
               
               <li key={i}>{c.fullname}
               <br/>
              {c.phone_number}</li>
               
                
            ))} </ul>
        </div>
    )
}

export default ContactList
