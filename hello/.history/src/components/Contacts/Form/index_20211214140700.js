import React, { useState } from 'react'

function Form() {
    const [form, setForm] = useState({fullname:"",phone_number:""})

    const onChangeInput = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const onSubmit = ()=>{
        console.log(form);
    }
    return (
        <div>
            <form>
            <input name="fullname"  placeholder='FullName'/>
            <br/>
            <br/>
            <input name="phone_number"  placeholder='Phone Number'/>
            <div><button>Add</button></div>
            </form>
            
        </div>
    )
}

export default Form
