import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const sampleTodos = [{ id: 1, text: "Learn React", isCompleted: false }];

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(sampleTodos);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) return null;
    const id = crypto.randomUUID();
    const newItem = { id, text, isCompleted: false };
    setTodos([...todos, newItem]);
    setText("");
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const toggleDeleteButton = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, showDelete: !item.showDelete } : item
      )
    );
  };

  const deleteItem = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="app-container ">
      <h1>Todo - List</h1>
      <TodoForm
        list={sampleTodos}
        onSubmit={handleSubmit}
        text={text}
        setText={setText}
      />
      <TodoList
        list={todos}
        toggleDone={toggleDone}
        toggleDeleteButton={toggleDeleteButton}
        deleteItem={deleteItem}
      />
    </div>
  );
}
