interface Todo {
    id: number;
    content: string;
    comleted: boolean;
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





export type {
    Todo,
    Todos,
    State,
    Action
}