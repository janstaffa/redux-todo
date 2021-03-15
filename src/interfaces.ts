interface Todo {
    id: number;
    content: string;
    completed: boolean;
}

type Todos = Todo[];

interface State {
    todos: Todos
}

interface Action {
    type: string;

    payload: {
        id: number,
        content: string
    };
}

interface Toggle {
    type: string;
    payload: { id: number };
}



export type {
    Todo,
    Todos,
    State,
    Action,
    Toggle
}