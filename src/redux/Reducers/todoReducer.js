import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../constatnt/todoContant"

export const todoReducer = (state = { todos: [] }, { type, payload }) => {
    switch (type) {
        case ADD_TODO: return { ...state, todos: [...state.todos, payload] }
        case REMOVE_TODO: const copy = state.todos
            copy.splice(payload, 1)
            return { todos: copy }
        case UPDATE_TODO: return { ...state, todos: payload }
        default: return state
    }
}
