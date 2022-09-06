import { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

function App() {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});

  return (
    <>
      <div className="container mx-auto mt-20">
        <Header

        />
        <div className="mt-12 md:flex">
          <Form
            task={task}
            tasks={tasks}
            setTasks={setTasks}
          />
          <TaskList
            tasks={tasks}
            setTask={setTask}
          />
        </div>
      </div>
    </>
  );
}

export default App;
