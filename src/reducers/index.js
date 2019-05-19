const SHOW_ALL = "SHOW_ALL"

const initState = {
  todos: [{
    id: 1,
    text: 'first example',
    isCompleted: false
  }, {
    id: 2,
    text: 'second example',
    isCompleted: true
  }, {
    id: 3,
    text: 'redux',
    isCompleted: false
  }, {
    id: 4,
    text: 'redux-saga',
    isCompleted: true
  }, {
    id: 5,
    text: 'antd-mobile',
    isCompleted: false
  }],
  visibilityFilter: SHOW_ALL
}

const addTodo = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_TODO': 
      return Object.assign({}, state, { 
        todos: state.todos.concat([{ text: action.text, id: action.id, isCompleted: false }]) 
      })
    case 'TOGGLE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map(todo => (
          todo.id === action.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ))
      })
    case 'SET_VISIBILITY_FILTER':
      return  Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case 'ADD_TODO_ASYNC':
      console.log('ADD_TODO_ASYNC_ACTION')
      return state
    default:
      return state
  }
}

export default addTodo