import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo'
import VisibleTodoList from './components/VisibleTodoList'
import VisibleFilter from './components/VisibleFilter'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import reducers from './reducers/index'
import { WingBlank, WhiteSpace } from 'antd-mobile'
import createSagaMiddleware from 'redux-saga'
import { watchIncrementAsync } from './sagas/index'
import userStore from './stores/store'
import UserInfo from './components/UserInfo'
import { Provider as MoProvider } from 'mobx-react'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(watchIncrementAsync)



function App() {
  return (
    <Provider store={store}>
      <MoProvider userStore={userStore}>
        <div className="App">
          <header className="App-header">
            <UserInfo />
            <WingBlank>
              <VisibleFilter />
              <WhiteSpace size="lg" />
              <AddTodo />
              <VisibleTodoList />
            </WingBlank>
          </header>
        </div>
      </MoProvider>
    </Provider>
  );
}

export default App;
