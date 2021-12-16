import React, { useState, useEffect } from "react";

export default function Content({ toDos, setToDo }) {
  const initialFormValues = { content: "", status: false };
  const [status, setStatus] = useState(false);
  const [index, setIndex] = useState();
  const [deleteIndex, seDeleteIndex] = useState();
  const [check, setCheck] = useState();


  const clickFunction = (e) => {
    let index = toDos.findIndex((o) => o.content === e.target.name);
    setStatus(false);
    setIndex(index);
    toDos[index].status = !toDos[index].status;
    setCheck(e.target.checked);
  };

  const trueAll = (e) => {
    toDos.filter((td) => (td.status = !status));
    setStatus(!status);
  };
  const deleteFunction = (e) => {
    let indexItem = toDos.findIndex((o) => o.content === e.target.name);
    toDos.splice(indexItem, 1);
    seDeleteIndex(indexItem);
  };
  useEffect(() => {
    setToDo(toDos);
    console.log("effect : content ");
    console.log("todos : ", toDos);
  }, [status, index,toDos]);
  return (
    <div>
        {/* <!-- This section should be hidden by default and shown when there are todos --> */}
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label onClick={trueAll} htmlFor="toggle-all">
            Mark all as complete
          </label>

          <ul className="todo-list">
            {toDos.map((t, index) => (
              <li
                key={index}
                className={t.status === true ? "completed" : "view"}
              >
                <div className="view">
                  <input
                    name={t.content}
                    className="toggle"
                    type="checkbox"
                    onChange={clickFunction}
                    checked={t.status}
                  />
                  <label>{t.content}</label>
                  <button
                    name={t.content}
                    onClick={deleteFunction}
                    className="destroy"
                  ></button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* <!-- This footer should hidden by default and shown when there are todos --> */}
        <footer className="footer">
          {/* <!-- This should be `0 items left` by default --> */}
          <span className="todo-count">
            <strong>
              {toDos.filter((o) => o.status === false).length} items left
            </strong>
          </span>

          <ul className="filters">
            <li>
              <a href="/#" className="selected">
                All
              </a>
            </li>
            <li>
              <a href="/#">Active</a>
            </li>
            <li>
              <a href="/#">Completed</a>
            </li>
          </ul>

          {/* <!-- Hidden if no completed items are left ↓ --> */}
          <button className="clear-completed">Clear completed</button>
        </footer>


      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}
