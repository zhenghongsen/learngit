import React from 'react'
import { addTodo, addTodoAsync } from '../actions/index'
import { connect } from 'react-redux'
import { Button, InputItem, WingBlank, WhiteSpace, Toast } from 'antd-mobile'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.handleAddTodoAsync = this.handleAddTodoAsync.bind(this)
  }
  handleChange(value) {
    this.setState({
      newTodo: value
    })
  }

  handleAddTodo(e) {
    if (!this.state.newTodo.trim()) {
      Toast.fail('The Content can not be empty1111', 1)
      console.log('log1');
      console.log('log2');
      return
    }
    this.props.onTodoClick(this.state.newTodo)
    this.setState({
      newTodo: ''
    })
  }

  handleAddTodoAsync() {
    this.props.onTodoClickAsync(this.state.newTodo)
  }

  render() {
    return (
      <div>
        <WingBlank>
          <InputItem type="text" 
            value={this.state.newTodo} 
            onChange={this.handleChange} 
            placeholder="请输入内容"></InputItem>
          <WhiteSpace />
          <Button type="primary" onClick={this.handleAddTodo} inline size="small">Add Todo</Button>
          <Button type="ghost" onClick={this.handleAddTodoAsync} inline size="small" className="margin-right-10">Add Todo Async</Button>
        </WingBlank>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: text => {
      dispatch(addTodo(text))
    },
    onTodoClickAsync: text => {
      dispatch(addTodoAsync(text))
    }
  }
}

AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)

export default AddTodo