import React from "react";

function Footer({
  setTodos,
  todos,
  viewStyle,
  setViewStyle,
  isFooterActive,
  clearCompleted,
}) {
  const leftItem = todos.filter((todo) => todo.done === false);

  return (
    <footer className={isFooterActive ? " footer" : "hidden"}>
      <span className="todo-count">
        <strong>{leftItem.length} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <button
            onClick={() => setViewStyle("all")}
            className={viewStyle === "all" ? "selected" : ""}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => setViewStyle("active")}
            className={viewStyle === "active" ? "selected" : ""}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => setViewStyle("completed")}
            className={viewStyle === "completed" ? "selected" : ""}
          >
            Completed
          </button>
        </li>
      </ul>
      <button
        className={clearCompleted ? "clear-completed" : "hidden"}
        mv-action="delete(todo where done)"
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;

// {todos.length > 0 ? "First" : "sec"}
