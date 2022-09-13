import { useState, useEffect } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

function App() {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});

  useEffect(() => {

    const getTasksLocalStorage = () => {
      const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks")) ?? [];
      setTasks(tasksLocalStorage);
    };

    getTasksLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (id) => {
    const updatedTask = tasks.filter(task => task.id !== id)

    setTasks(updatedTask)
  }

  return (
    <>
      <div className="container mx-auto mt-20">
        <Header

        />
        <div className="mt-12 md:flex">
          <Form
            tasks={tasks}
            setTasks={setTasks}
            task={task}
            setTask={setTask}
          />
          <TaskList
            tasks={tasks}
            setTask={setTask}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </>
  );
}

export default App;
