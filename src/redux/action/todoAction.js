import { ADD_TODO, REMOVE_TODO } from "../constatnt/todoContant"

export const addTodoAction = (todo) => dispatch => {
    dispatch({ type: ADD_TODO, payload: todo })
}
export const removeTodoAction = id => dispatch => {
    dispatch({ type: REMOVE_TODO, payload: id })
}