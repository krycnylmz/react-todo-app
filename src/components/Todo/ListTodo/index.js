import { useState } from "react";

function ListTodo({ todos, setTodos, viewStyle }) {
  const [isAllCompleted, setIsAllCompleted] = useState(false);

  const isCompleted = (input) => {
    setTodos(
      todos.map((item, index) =>
        parseInt(index) === parseInt(input.target.id)
          ? { ...item, done: !item.done }
          : item
      )
    );
  };

  const allCompleted = () => {
    setTodos(
      todos.map((item, index) =>
        item ? { ...item, done: !isAllCompleted } : item
      )
    );

    setIsAllCompleted(!isAllCompleted);
  };
  // const deleteItem = () =>
  //   setTodos(todos.filter((item) => item.id !== todo.id));

  const deleteTodo = (e) => {
    setTodos(
      todos.filter((item, index) => parseInt(index) !== parseInt(e.target.id))
    );
  };

  let filtered;
  switch (viewStyle) {
    case "all":
      filtered = todos.filter((todo) => todo.done === false || true);
      break;
    case "active":
      filtered = todos.filter((todo) => todo.done === false);
      break;
    case "completed":
      filtered = todos.filter((todo) => todo.done === true);
      break;
    default:
      break;
  }

  return (
    <section className="main">
      <input
        onClick={allCompleted}
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
      />

      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {filtered.map((obj, i) => (
          <li key={i} className={obj.done ? "completed" : ""}>
            <div className="view">
              <input
                id={i}
                className="toggle"
                type="checkbox"
                onClick={isCompleted}
                checked={obj.done}
                readOnly
              />
              <label property="text">{obj.text}</label>
              <button id={i} onClick={deleteTodo} className="destroy"></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ListTodo;
