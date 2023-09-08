import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const TodoInput = ({ todos, setTodos }) => {
  const [task, setTask] = useState("");

  const notify = () =>
    toast("✅ Task Added Successfully!", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleAddTodod = () => {
    let todo = {
      id: uuidv4(),
      task: task,
    };
    setTodos([...todos, todo]);
    notify();
    setTask("");
  };
  return (
    <div>
      <input
        placeholder="Add Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTodod}>Add</button>
    </div>
  );
};

export default TodoInput;
