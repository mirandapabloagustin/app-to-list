const TodoList = ({ tasks }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tasks.map(task => (
                <div key={task.id} className={`relative max-w-sm p-6 border rounded-lg shadow ${task.status ? 'bg-green-100 border-green-300' : 'bg-yellow-100 border-yellow-300 dark:bg-gray-800 dark:border-gray-700'}`}>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{task.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{task.description}</p>
                    <div className="flex justify-between items-end">
                        <button  className="absolute bottom-2 right-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
                            Borrar
                        </button>
                    </div>
                    <p className="absolute bottom-2 left-2 text-sm text-gray-500 dark:text-gray-300">
                        Estado: {task.status ? 'Completada' : 'Pendiente'}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default TodoList