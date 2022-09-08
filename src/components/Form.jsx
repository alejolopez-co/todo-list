import { useState, useEffect } from "react";
import { AlertError } from "./AlertError";

export const Form = ({ tasks, setTasks, task, setTask }) => {

    const [title, setTitle] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [description, setDescription] = useState('');

    const [error, setError] = useState(false);
    const [messageError, setMessageError] = useState('');

    useEffect(() => {
        if (Object.keys(task).length > 0) {
            setTitle(task.title);
            setTaskDate(task.taskDate);
            setDescription(task.description);
        }
    }, [task])

    const generateId = () => {
        const id = Math.random().toString(20).substr(2);
        return id;
    }

    // Form validation
    const handleSubmit = (e) => {
        e.preventDefault();

        if ([title, taskDate, description].includes('')) {
            setMessageError('Please, fill out the required fields 😔');
            setError(true);
            return;
        };

        setError(false);

        // Task object
        const taskObject = {
            title,
            taskDate,
            description
        }


        if (task.id) {
            // Edit task
            taskObject.id = task.id;
            const updatedTasks = tasks.map((taskState) =>
                taskState.id === task.id ? taskObject : taskState
            );

            setTasks(updatedTasks);
            setTask({});

        } else {
            // Create task
            taskObject.id = generateId();
            setTasks([...tasks, taskObject]);
        }

        // Clean fields
        setTitle('');
        setTaskDate('');
        setDescription('');



    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center mb-10">
                New task
            </h2>
            <form onSubmitCapture={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                <div className="mb-5">
                    <label htmlFor="taskTitle" className="block text-gray-700 font-bold">
                        Title
                    </label>
                    <input
                        id="taskTitle"
                        type="text"
                        placeholder="type task's title..."
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="taskDate" className="block text-gray-700 font-bold">
                        Task date
                    </label>
                    <input
                        id="taskDate"
                        type="date"
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        value={taskDate}
                        onChange={(e) => { setTaskDate(e.target.value) }}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="description" className="block text-gray-700 font-bold">
                        Description
                    </label>
                    <textarea
                        id="description"
                        type="text"
                        placeholder="type task's description..."
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </div>
                {!task.id ? (
                    <input
                        type="submit"
                        className="bg-violet-700 w-full p-3 text-white font-bold rounded-md hover:bg-violet-900 transition-colors cursor-pointer"
                        value="Create"
                    />
                ) : (
                    <input
                        type="submit"
                        className="bg-sky-500 w-full p-3 text-white font-bold rounded-md hover:bg-sky-600 transition-colors cursor-pointer"
                        value="Update"
                    />
                )
                }
                {error && (
                    <AlertError
                        messageError={messageError}
                    />
                )}
            </form>
        </div>
    );
};
