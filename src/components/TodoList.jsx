import React from "react";
import Item from "./Item";
import styles from "./TodoList.module.css";
function TodoList({ todos, settodos }) {
  const sortedtodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedtodos.map((item) => (
        <Item key={item.name} data={item} todos={todos} settodos={settodos} />
      ))}
    </div>
  );
}

export default TodoList;
