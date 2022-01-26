import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './components/App'
import { reducers } from './reducers'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App color="red" />
  </Provider>,
  document.querySelector('#root')
)

// class App extends React.Component {
//   state = { counter: 0 } 

//   onIncrement = (): void => {
//     this.setState({ counter: this.state.counter + 1 })
//   }

//   onDecrement = (): void => {
//     this.setState({ counter: this.state.counter - 1 })
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.onIncrement}>Increment</button>
//         <button onClick={this.onDecrement}>Decrement</button>
//         <span>{this.state.counter}</span>
//       </div>
//     )
//   }
// }
