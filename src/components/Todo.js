import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <li onClick={ () => this.props.onClick() } 
        style={{
          textDecoration: this.props.isCompleted ? 'line-through' : 'none',
          color: this.props.isCompleted ? 'grey' : 'white'
        }}>
        {this.props.text}
      </li>
    )
  }
}