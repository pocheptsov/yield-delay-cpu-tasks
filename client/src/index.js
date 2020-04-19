// import '@babel/polyfill'

import * as React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Counter from './Counter'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export default function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const action = (type) => store.dispatch({ type })

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrementAsync={() => action('INCREMENT')}
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
