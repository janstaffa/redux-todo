import { Action } from "../interfaces";
import { ADD_TODO, TOGGLE_TODO } from "./actionTypes";

let nextTodoId = 0;

const addTodo = (content: string): Action => ({
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
