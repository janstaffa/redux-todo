import { useState } from 'react';
import { connect } from 'react-redux';
import { Action } from '../interfaces';
import { addTodo } from '../store/actions';

export interface AddTodoProps {
    addTodo: (content: string) => Action;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleAddTodo = () => {
        addTodo(inputValue);
    }
    return (
        <div className="AddTodo">
            <input type="text" value={inputValue} onChange={(e) => {
                setInputValue(e.target.value);
            }} />
            <button onClick={handleAddTodo}>+</button>
        </div>
    );
}

export default connect(null, { addTodo })(AddTodo);