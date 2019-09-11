export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Complete MVP',
            completed: false,
            id: 3892987588
        },
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {...todo, completed: !todo.completed};
                    } else {
                        return todo;
                    }
                })
            }
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state;
    }
}