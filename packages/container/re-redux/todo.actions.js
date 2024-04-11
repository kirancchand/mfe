export const AddTodo = (description) => {
    console.log(description)
    return {
        type: 'ADD_TODO',
        payload: description
    }
}

export const RemoveTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        payload: id
    }
}