import Todo from "./Components/Todo";
import styles from "./App.module.css";

export default function App() {
  document.body.style = "background: #ECECEC;";
  return (
    <div className={styles.App}>
      <h1>To-do List</h1>
      <Todo />
    </div>
  );
}
