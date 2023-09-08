import React from "react";
import TodoItem from "./TodoItem";
import { toast } from "react-toastify";

const TodoList = ({ todos, setTodos }) => {
  const notify = () =>
    toast("✅ Task Removed Successfully!", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleDelete = (id) => {
    let filteredTodos = todos.filter((el) => el.id !== id);
    setTodos(filteredTodos);
    notify();
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        border: "0px solid black",
        gap: "50px",
        marginTop: "20px",
      }}
    >
      {todos.map((el) => (
        <TodoItem key={el.id} {...el} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TodoList;
