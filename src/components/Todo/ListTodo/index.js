import React from "react";

function ListTodo({ todos }) {
  return (
    <section className="main">
      <input class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((obj, i) => (
          <li key={i} className="todo">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{obj.text}</label>
              <button className="destroy"></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ListTodo;
