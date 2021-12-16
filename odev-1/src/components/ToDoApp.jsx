import React,{useState} from 'react'
import Content from './Content'
import ToDoList from './ToDoList'

export default function ToDoApp() {
    const [toDos, setToDo] = useState([
        {content:"Learn Java",status:true},
        {content:"Learn Javascript",status:false},
        {content:"Watch Movie",status:false},
        {content:"Travel",status:true},
        {content:"Go To Theatre",status:true}
    ])

    return (
        <div>
            <section className="todoapp">
            <ToDoList toDos={toDos} setToDo={setToDo}  />
            <Content toDos={toDos} setToDo={setToDo} />
            </section>
        </div>
    )
}
