import React, { useEffect, useState } from "react";
import { Task } from "../types/Task";
import api from "../services/api";

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    api
      .get("/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>"Status : {task.completed ? "Yes" : "No"}"</p>
              <p>
                "Created at :{" "}
                {task.createdAt.toLocaleString("en-IN", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tasks;
