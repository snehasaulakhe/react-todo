import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { todoReducer } from './Reducers/todoReducer';

const rootReducer = combineReducers({
    Alltodos: todoReducer
})


const reduxStore = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))

export default reduxStore
