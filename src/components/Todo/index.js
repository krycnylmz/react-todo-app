import { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";
import Footer from "./Footer";

function Todo() {
  const [viewStyle, setViewStyle] = useState("all");
  const [clearCompleted, setClearCompleted] = useState(false);
  const [isFooterActive, setIsFooterActive] = useState(false);

  const [todos, setTodos] = useState([
    {
      text: "Taste JavaScript",
      done: true,
    },
    {
      text: "Code furiously",
      done: true,
    },
    {
      text: "Promote Mavo",
      done: false,
    },
    {
      text: "Give talks",
      done: false,
    },
  ]);

  useEffect(() => {
    console.log(todos);
    if (todos.length > 0) {
      setIsFooterActive(true);
    } else {
      setIsFooterActive(false);
    }
    todos.filter((item) =>
      Object.keys(item).some((value) =>
        value.done ? setClearCompleted(true) : setClearCompleted(false)
      )
    );
  }, [todos]);

  return (
    <section className="todoapp">
      <AddTodo addTodo={setTodos} todos={todos} />
      <ListTodo todos={todos} setTodos={setTodos} viewStyle={viewStyle} />
      <Footer
        setTodos={setTodos}
        todos={todos}
        viewStyle={viewStyle}
        setViewStyle={setViewStyle}
        isFooterActive={isFooterActive}
        clearCompleted={clearCompleted}
      />
    </section>
  );
}

export default Todo;
