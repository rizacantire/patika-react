import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UserDetail() {
  let { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    function fetchData() {
      axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
        setUser(res.data)
      );
    }

    fetchData();
  }, [id]);
  return (
    <div>
      <h1>User Detail</h1>

      <p>User Id : {user.id}</p>
      <p>User Name : {user.name}</p>
      <p>Username : {user.username}</p>
      <p>Email : {user.email}</p>
      <p></p>
      <p>Phone : {user.phone}</p>
      <p>Web Site : {user.website}</p>
    </div>
  );
}
