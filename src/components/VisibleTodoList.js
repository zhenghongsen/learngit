import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions/index'

class VisibleTodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <ul>
        {
          this.props.todos.map(todo => 
           <Todo key={todo.id} {...todo} onClick={() => this.props.onTodoClick(todo.id)}/>
          )
        }
      </ul>
    )
  }
}

const filterTodoList = (todos, filter) => {
  switch(filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.isCompleted)
    case 'SHOW_UNCOMPLETED':
      return todos.filter(todo => !todo.isCompleted)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: filterTodoList(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      console.log(id)
      dispatch(toggleTodo(id))
    }
  }
}

VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList)

export default VisibleTodoList