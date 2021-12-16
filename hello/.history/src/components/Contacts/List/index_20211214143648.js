import React, { useState } from 'react'

function ContactList({contacts}) {
    const [filterText, setFilterText] = useState("")
    const filtered = filterText.filter((item)=>{
        return Object.keys(item).some((key)=>{
            item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
        })
    })

    console.log(filtered);
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
