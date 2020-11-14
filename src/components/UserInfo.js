
import React from 'react'
import { observer, inject } from 'mobx-react'
import { Button, WhiteSpace, NoticeBar } from 'antd-mobile'

@inject('userStore')
@observer
class UserInfo extends React.Component {
  render() {
    const { user } = this.props.userStore
    return (
      <div>
        <h2>Hello world, {user.name}</h2>
        <p>test git stash</p>
        <Button type="warning" 
          onClick={this.props.userStore.increaseTodo} 
          inline 
          size="small">IncreaseTodo git test</Button>
        <Button type="warning"
          onClick={this.props.userStore.decreaseTodo} 
          inline
          className="margin-right-10" 
          size="small">DecreaseTodo</Button>
        <WhiteSpace size="md" />
        <NoticeBar mode="closable">
          User {user.name}, you have {user.todoNum} todos need to complete.
        </NoticeBar>
        <WhiteSpace size="xl" />
      </div>
    )
  }
}

export default UserInfo
