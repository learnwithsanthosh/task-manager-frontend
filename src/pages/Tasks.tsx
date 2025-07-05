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

  const handleToggleComplete = (task: Task) => {
    const updateTask = { ...task, completed: !task.completed };
    api
      .put(`/task/${task.id}`, updateTask)
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
      <div className="row">
        {tasks.map((task) => (
          <div key={task.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <>
                  <h5 className="card-title">{task.title}</h5>
                  <p className="card-text">{task.description}</p>
                  <p className="card-text">
                    Status : {task.completed ? "✔ Completed" : "⏳ Pending"}
                  </p>
                  <p className="card-text">
                    Created at :{" "}
                    {new Date(task.createdAt).toLocaleString("en-IN", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-3 gap-2">
                    <div className="d-flex align-items-center gap-2 m-0">
                      <label
                        className="form-check-label"
                        htmlFor={`complete-${task.id}`}
                      >
                        Mark for Completed
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`complete-${task.id}`}
                        checked={task.completed}
                        onChange={() => handleToggleComplete(task)}
                      ></input>
                    </div>
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
          </div>
        ))}
      </div>
    </>
  );
};
export default Tasks;
