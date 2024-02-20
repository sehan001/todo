import { useState } from "react";
import TodoList from "./TodoList";
import Forum from "./Forum.jsx";
import Footer from "./Footer.jsx";
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const ctds = todos.filter((todo) => todo.done).length;
  const nctds = todos.filter((todo) => !todo.done).length;
  return (
    <div>
      <Forum todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} settodos={setTodos} />
      <Footer a={ctds} b={nctds} />
    </div>
  );
};

export default Todo;
