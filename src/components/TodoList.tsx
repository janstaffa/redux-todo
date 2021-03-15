import { connect } from 'react-redux';
import { State, Todos, Toggle } from '../interfaces';
import { toggleTodo } from '../store/actions';

export interface TodoListProps {
    todos?: Todos;
    toggleTodo: (id: number) => Toggle;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
    return (
        <div className="TodoList">
            <ul>
                {todos!.map(todo => (
                    <li key={todo.id}><input type="checkbox" checked={todo.completed} onClick={(e) => {
                        toggleTodo(todo.id);
                    }} />{todo.content}</li>
                ))}
            </ul>
        </div>
    );
}

const getTodoList = (state: State) => {
    const todos = { ...state.todos };
    return todos;
}
export default connect(getTodoList, { toggleTodo })(TodoList);