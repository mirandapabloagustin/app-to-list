"use client"; // Esta declaración indica que el componente debe ser renderizado en el cliente
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import TaskForm from '../component/TaskForm';

function NewPage() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            
            <Provider store={store}>
                <TaskForm />
            </Provider>
        </div>
    );
}

export default NewPage;

