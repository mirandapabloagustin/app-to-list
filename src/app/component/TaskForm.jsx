"use client";
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../action/addActions';
import axios from 'axios';

function TaskForm() {
    const dispatch = useDispatch();
    const titleInput = useRef(null);
    const descriptionInput = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const title = titleInput.current.value;
        const description = descriptionInput.current.value;

        if (!title.trim() || !description.trim()) {
            alert('Please enter title and description.');
            return;
        }

        dispatch(addTodo(title, description));
        event.target.reset();
    };



    return (
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>

                <div className="mb-4">
                    <label htmlFor="task-title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Title</label>
                    <input
                        type="text"
                        id="task-title"
                        ref={titleInput}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Ingrese el título de la tarea"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="task-descrip" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Description</label>
                    <textarea
                        id="task-descrip"
                        rows="4"
                        ref={descriptionInput}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Comente la tarea a realizar..."
                    ></textarea>
                </div>

                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">create</button>
            </form>
        </div>
    );
}

export default TaskForm;
