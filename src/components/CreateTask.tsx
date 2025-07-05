import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

interface Props {
  onTaskCreated: () => void;
}

const CreateTask = ({ onTaskCreated }: Props) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    api.post("/save", { title, description, completed: false }).then(() => {
      setTitle("");
      setDescription("");
      navigate("/tasks");
    });
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder=" task title"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Descrition</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="task description"
                  className="form-control"
                />
              </div>
              <br></br>
              <button type="submit" className="btn btn-primary">
                Add task
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
