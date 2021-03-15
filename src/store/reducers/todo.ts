import { State, Action } from '../../interfaces';
import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState: State = {
    todos: []
};

const todo_reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ADD_TODO: {
            const { id, content } = action.payload;
            return {
                ...state,
                todos: [...state.todos,
                {
                    id,
                    content,
                    completed: false
                }]
            };
        }
        case TOGGLE_TODO: {
            const { id } = action.payload;
            let todos = [...state.todos];

            todos = todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        comleted: !todo.comleted
                    }
                } else {
                    return todo;
                }
            });
            return {
                ...state,
                todos
            };
        }
        default:
            return state;
    }
}

export default todo_reducer;