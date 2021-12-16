import styles from "./TaskList.module.css";

export default function TaskList({ id, name }) {
  return (
    <div className={styles.mainDiv}>
      <h3>{name}</h3>
    </div>
  );
}
