
import { createStore } from 'redux';
import rootReducer from './reducer/todoReducer';
const store = createStore(rootReducer);
export default store;
