import React, { useState } from 'react'

function ContactList({contacts}) {
    const [filterText, setFilterText] = useState("")
    return (
        <div> 

            <input placeholder='Filter Contact' value={filterText} onchange={(e)=>{
                setFilterText(e.target.value)
            }} />
            
            
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
