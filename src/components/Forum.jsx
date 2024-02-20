import { useState } from "react";
import styles from "./Forum.module.css";

function Forum({ todos, setTodos }) {
  const [value, setValue] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, value]);
    setValue({ name: "", done: false }); // Resetting the value to empty
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formcontainer}>
        <input
          className={styles.input}
          onChange={(e) => setValue({ name: e.target.value, done: false })}
          type="text"
          value={value.name} // Binding value to state
          placeholder="enter"
        />
        <button className={styles.button} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Forum;
