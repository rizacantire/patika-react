import React, { useEffect,useState } from "react";
import "./style.css"
export default function ToDoList({toDos,setToDo}) {
    const initialFormValues = {content:"",status:false}
    const [defaultValue,setDefaultValue] = useState(initialFormValues)
    const [filterText, setFilterText] = useState("")
    const [filtered, setFiltered] = useState(toDos)
    const [defaultToDo,setDefaultToDo] = useState(toDos)

    const onChange = (e)=>{
        setDefaultValue({content:e.target.value,status:false});
        setFilterText(e.target.value)
        setFiltered(toDos.filter((item)=>{
            return Object.keys(item).some((key)=>
                item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
            )
        }))
        setDefaultToDo(filtered)
    }
    const onSubmit = (e)=>{
        e.preventDefault()
        setToDo([...defaultToDo,defaultValue])
        setDefaultValue(initialFormValues)
    
        setFiltered(toDos)
        
    }

    
    useEffect(() => {
        setToDo(toDos)
        setDefaultToDo(toDos)

    }, [filtered])
  return (
    <div>
        <header className="header">
          <h1>todos</h1>
          <form  onSubmit={onSubmit}>
            <input onChange={onChange}
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              value={defaultValue.content}
            />
          </form>
        </header>
    </div>
  );
}
