import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import CreateTask from "./components/CreateTask";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="flex-grow-1 container py-4">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/tasks" element={<Tasks></Tasks>}></Route>
            <Route
              path="/createTask"
              element={
                <CreateTask
                  onTaskCreated={() => console.log("Task created")}
                ></CreateTask>
              }
            ></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
