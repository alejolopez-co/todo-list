export const Task = ({ task, setTask, deleteTask }) => {

    const { title, taskDate, description, id } = task;

    const handleDelete = () => {
        const respuesta = confirm('¿Do you want to delete the task? 🤔');

        if (respuesta) {
            deleteTask(id);
        }
    }

    return (
        <div className="bg-white shadow-md px-5 py-10 rounded-lg mt-5">
            <p className="font-bold mb-3 text-gray-700">
                Title: {' '}
                <span className="font-normal normal-case">{title}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700">
                Task date: {' '}
                <span className="font-normal normal-case">{taskDate}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700">
                Description: {' '}
                <span className="font-normal normal-case">
                    {description}
                </span>
            </p>
            <div className="flex justify-between">
                <button
                    className="bg-sky-500 hover:bg-sky-600 mt-4 py-2 px-10 rounded-md text-white font-bold"
                    type="button"
                    onClick={() => setTask(task)}
                >
                    Update
                </button>
                <button
                    className="bg-red-500 hover:bg-red-600 mt-4 py-2 px-10 rounded-md text-white font-bold"
                    type="button"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}