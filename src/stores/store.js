import { observable, action } from 'mobx'

class Store {
  @observable user = {
    name: 'ycc',
    sex: 'male',
    todoNum: 3
  }

  @action.bound
  increaseTodo() {
    this.user.todoNum++
  }

  @action.bound
  decreaseTodo() {
    this.user.todoNum--
  }
}

const storeInstance = new Store()

export default storeInstance