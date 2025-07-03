import React, { useEffect, useState } from "react";
import { Task } from "../types/Task";
import api from "../services/api";
import { Link } from "react-router-dom";

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    api
      .get("/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.log("Delete failed : ", err));
  }, []);
  const handleDelete = (id: Number) => {
    api
      .delete(`/task/${id}`)
      .then(() => {
        return api.get("/tasks");
      })
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2>Tasks</h2>
      <Link to="/createTask" className="btn btn-primary my-3">
        CreateTask
      </Link>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <>
                  <h5 className="card-title">{task.title}</h5>
                  <p className="card-text">{task.description}</p>
                  <p className="card-text">
                    "Status : {task.completed ? "Yes" : "No"}"
                  </p>
                  <p className="card-text">
                    "Created at :{" "}
                    {task.createdAt.toLocaleString("en-IN", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <div className="d-flex justify-content-between mt-3">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(task.id)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tasks;
