import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

function ContactList({contacts}) {
    const [filterText, setFilterText] = useState("")
    const filtered = contacts.filter((item)=>{
        return Object.keys(item).some((key)=>{
            item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
        })
    })
    useEffect(() => {
        console.log(filtered);
    },[filterText])

    
    return (
        <div> 
            <input placeholder='Filter Contact' onchange={(e)=>{
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
