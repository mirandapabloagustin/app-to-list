import { v4 as uuidv4 } from 'uuid';


export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (title, description) => ({
  type: ADD_TODO,
  payload: {
    id: uuidv4(),
    title,
    description,
    status: false,
  },
});


export const updateTodo = (id, updates) => ({
  type: UPDATE_TODO,
  payload: {
    id,
    updates,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});
