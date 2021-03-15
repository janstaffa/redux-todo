import React from 'react';
import { Provider } from 'react-redux'
import store from './store/store';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
        <AddTodo />
      </div>
    </Provider>
  );
}

export default App;
