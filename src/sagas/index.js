
// import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'


// Our worker Saga: 将执行异步的 addTodo 任务
export function* addTodoAsync(action) {
  console.log('ADD_TODO_SAGA')
  // yield delay(1000)
  yield put({
    ...action, 
    type: 'ADD_TODO' 
  })
}

// Our watcher Saga: 在每个 ADD_TODO_ASYNC action spawn 一个新的 addTodoAsync 任务
export function* watchIncrementAsync() {
  yield takeEvery('ADD_TODO_ASYNC', addTodoAsync)
}