import React, { useState } from 'react'

function Form({addContact,contacts}) {
    const initialFormValues = {fullname:"",phone_number:""}
    const [form, setForm] = useState(initialFormValues)

    const onChangeInput = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        if(form.fullname === ""|| form.phone_number===""){
            return false;
        }
        addContact([...contacts,form])
        setForm(initialFormValues)
    }
    return (
        <div>
            <form onSubmit={onSubmit} >
            <input name="fullname"  placeholder='FullName'
            value={form.fullname}
             onChange={onChangeInput}/>
            <br/>
            <br/>
            <input value={form.phone_number} name="phone_number"  placeholder='Phone Number' onChange={onChangeInput}/>
            <div><button>Add</button></div>
            </form>
            
        </div>
    )
}

export default Form
