import React, { useState } from "react";
import TaskList from "./TaskList";
import TodoInput from "./TodoInput";
import Pagination from "./Pagination";

export default function Todo() {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const getTasks = ({ page = 1 }) => {
    return fetch(`http://localhost:3000/tasks?_page=${page}`).then((res) =>
      res.json()
    );
  };

  const onSubmit = (text, page) => {
    console.log("PAGE", page);
    const payload = {
      title: text
    };
    return fetch(`http://localhost:3000/tasks?_page=${page}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then((res) => {
        setTasks([...tasks, res]);
        const totalNoPages = Math.ceil(tasks.length / 3);
        setTotalPages(totalNoPages);
        updateTodo(res);
      })
      .catch((err) => console.log(err));
  };

  const updateTodo = (res) => {
    getTasks({ page });
  };

  console.log(tasks);

  // MOUNTING
  useState(() => {
    getTasks({ page })
      .then((res) => {
        setTasks(res);
        if (res.length) {
          const totalNoPages = Math.ceil(res.length / 3);
          console.log(tasks, res, res.length, totalPages);
          setTotalPages(totalNoPages);
        }
        setIsLoading(false);
      })
      .catch((err) => alert("There has been an error!"));
  }, [tasks, page]);

  const handlePageChange = (value) => {
    setPage(value);
    getTasks({ page });
  };

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <TodoInput onSubmit={onSubmit} />
          {tasks.map((task) => (
            <TaskList id={task.id} name={task.title} />
          ))}
          <Pagination
            currentPage={page}
            onClickCallback={handlePageChange}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  );
}
