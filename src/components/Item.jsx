import React from "react";
import styles from "./Item.module.css";

const Item = ({ data, todos, settodos }) => {
  function handledelete(data) {
    settodos(todos.filter((todo) => todo !== data));
  }
  function handleclick(name) {
    settodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const className = data.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        <span className={className} onClick={() => handleclick(data.name)}>
          {data.name}
        </span>

        <span>
          <button onClick={() => handledelete(data)} className={styles.delbutn}>
            delete
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
};

export default Item;
