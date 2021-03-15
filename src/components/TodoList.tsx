import { connect } from 'react-redux';
import { State, Todos } from '../interfaces';

export interface TodoListProps {
    todos?: Todos;
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    return (
        <div className="TodoList">
            <ul>
                {todos!.map(todo => (
                    <li key={todo.id}>{todo.content}</li>
                ))}
            </ul>
        </div>
    );
}

const getTodoList = (state: State) => {
    const todos = { ...state.todos };
    return todos;
}
export default connect(getTodoList)(TodoList);