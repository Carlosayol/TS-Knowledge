import { fetchTodos, Todo } from '../actions'
import { StoreState } from '../reducers'
import { connect } from 'react-redux'

interface AppProps {
  todos: Todo[]
  fetchTodos(): any
}

const _App = (props: AppProps): JSX.Element => {
  const onClick = (): void => {
    props.fetchTodos()
  }

  const renderList = (): JSX.Element[] => {
    return props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>
    })
  }

  return (
    <div>
      <button onClick={onClick}>Fetch</button>
      {renderList()}
    </div>
  )
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos }
}

export const App = connect(
  mapStateToProps,
  { fetchTodos }
)(_App)