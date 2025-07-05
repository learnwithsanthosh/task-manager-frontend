import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="text-center py-5">
        <h1 className="display-4 fw-bold mb-3">Welcome to Task Manager</h1>
        <p className="lead text-secondary">
          Organize your work, track tasks, and boost your productivity.
        </p>
        <Link to="/createTask" className="btn btn-primary me-2">
          CreateTask
        </Link>
        <Link to="/tasks" className="btn btn-primary me-2">
          View all tasks
        </Link>
      </div>
    </>
  );
};

export default Home;
