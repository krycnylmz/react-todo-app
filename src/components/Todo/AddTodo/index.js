import { useState, useEffect } from "react";

const initialForm = { text: "", done: false };

function AddTodo({ addTodo, todos }) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    setForm(initialForm);
  }, [todos]);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.text === "") {
      return false;
    }
    console.log("Todo submitted by form");

    addTodo([...todos, form]);
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          name="text"
          placeholder="What you want to add?"
          value={form.text}
          onChange={onChange}
        />
      </form>
    </header>
  );
}

export default AddTodo;
