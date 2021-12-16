import React from "react";
import styles from "./Pagination.module.css";

export default function Pagination({
  totalPages,
  currentPage,
  onClickCallback
}) {
  const pages = new Array(totalPages).fill(0).map((a, i) =>
    i + 1 === currentPage ? (
      <button className={styles.button} disabled key={i}>
        {i + 1}
      </button>
    ) : (
      <button
        className={styles.button}
        onClick={() => onClickCallback(i + 1)}
        key={i}
      >
        {i + 1}
      </button>
    )
  );
  return <div className={styles.div}>{pages}</div>;
}
