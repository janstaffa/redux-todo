import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;

const addTodo = (content: string) => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
});
const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export {
    addTodo,
    toggleTodo
}
