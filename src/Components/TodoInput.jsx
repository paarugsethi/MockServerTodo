import { useState } from "react";
import styles from "./TodoInput.module.css";

export default function TodoInput({ onSubmit }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    onSubmit(text);
  };

  return (
    <div>
      <input
        className={styles.input}
        onChange={handleChange}
        type="text"
        name="task"
        placeholder="Enter Task here"
      />
      <button className={styles.button} onClick={handleClick}>
        <h2>+</h2>
      </button>
    </div>
  );
}
