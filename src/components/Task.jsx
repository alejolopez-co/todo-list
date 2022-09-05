export const Task = ({ task, setTask }) => {

    const { title, taskDate, description } = task;

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
                    onClick={ () => setTask(task) }
                >
                    Update
                </button>
                <button
                    className="bg-red-500 hover:bg-red-600 mt-4 py-2 px-10 rounded-md text-white font-bold"
                    type="button"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}