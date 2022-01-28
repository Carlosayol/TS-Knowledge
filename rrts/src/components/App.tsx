import React from 'react'
import { Todo } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
  todos: Todo[]
  fetchTodos(): any
}

const App = (props: AppProps): JSX.Element => {
  return <div>Hola</div>
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos }
}

export default App