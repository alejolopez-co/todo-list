import { Task } from "./Task";

export const TaskList = ({ tasks }) => {
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-scroll">
            <h2 className="font-black text-3xl text-center mb-10">
                Task list
            </h2>
            {tasks.map((task) => {
                return (
                    <Task
                        key={task.id}
                        task={task}
                    />
                )
            })}
        </div>
    )
} 