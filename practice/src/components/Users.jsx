import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
       axios("https://jsonplaceholder.typicode.com/users").then((res)=>setUsers(res.data))
    }, [])
    return (
        <div> 
            <ul>
            {users.map((user)=>(
                <li key={user.id}>
                    <Link to={`/userDetails/${user.id}`}>
                    {user.name}
                    </Link>
                   
                </li>
            ))}
            </ul>
        </div>
    )
}
