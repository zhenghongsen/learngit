let nextTodoId = 6

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const addTodoAsync = text => {
  return {
    type: 'ADD_TODO_ASYNC',
    id: nextTodoId++,
    text
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}