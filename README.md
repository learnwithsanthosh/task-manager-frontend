# Day 11 – React Frontend Setup (Task Manager)

## ✅ What was done:

- Created new Vite-based React project: `task-manager-frontend`
- Installed dependencies: axios, react-router-dom
- Created clean folder structure for components, pages, services
- Set up routing with placeholder pages: Home, Tasks
- Added Header and Footer layout components

# Day 12 – React + Spring Boot Integration: Fetch Tasks

## ✅ What was done:

- Axios instance created in React
- Task type defined for TypeScript
- Used `useEffect` to call `GET /tasks` from backend
- Rendered list of tasks in React frontend
- Connected full stack: Spring Boot + React + Docker DB (local)

## 🔗 Next Step:

- Add form to **create new task**
- Implement update/delete functionality

# Day 13 – Task Creation (React + Spring Boot API)

## ✅ What was done:

- Created a form in React with fields:
  - Task Title
  - Task Description
- Handled form submission with axios
- Sent a POST request to Spring Boot backend
- Task saved in DB and rendered in frontend UI dynamically

## 📦 Tech Used:

- React with TypeScript and Axios
- Spring Boot with REST API
- JSON payload with title, description, completed

## 🔗 Next Steps:

- Implement task update (complete/incomplete)
- Implement task deletion

# Day 14 – React (Delete Task Feature)

## ✅ What was implemented:

- Added a delete button next to each task in the task list
- On click, calls Spring Boot DELETE API
- Task is removed from UI after deletion

## 🔗 Axios Function:

```ts
export const deleteTask = (id: number) => API.delete(`/task/${id}`);
```

# Day 15 – React: Update Task (PUT Integration)

## ✅ What was implemented

- Added checkbox to toggle task completion status
- Used Axios PUT request to update task via Spring Boot backend
- Dynamically updated UI after successful API response
- Handled optimistic UI updates for better UX

## 🧠 Learning:

- `onChange` with checkbox
- Working with mapped arrays
- PUT request structure with Axios

## 📂 Project: Task Manager Frontend
