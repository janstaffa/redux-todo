interface Todo {
    id: number;
    content: string;
    comleted: boolean;
}

type Todos = Array<Todo>;

interface State {
    todos: Todos
}

interface Action {
    payload: {
        id: number,
        content: string
    };
    type: string;
}





export type {
    Todo,
    Todos,
    State,
    Action
}