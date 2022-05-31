import { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

function Todo() {
  const [todos, setTodos] = useState([
    {
      done: true,
      text: "Taste JavaScript",
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
    {
      text: "Write tutorials",
      done: true,
    },
    {
      text: "Have a life!",
      done: false,
    },
  ]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <section className="todoapp">
      <AddTodo addTodo={setTodos} todos={todos} />
      <ListTodo todos={todos} />
    </section>
  );
}

export default Todo;
