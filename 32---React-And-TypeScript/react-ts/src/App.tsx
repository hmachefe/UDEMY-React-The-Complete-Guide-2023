import './App.css'
import NewTodo from './components/NewTodo'
import Todos from './components/Todos'
import Todo from './models/Todo'

function App() {

  const todos = [
    new Todo('learn React'),
    new Todo('learn TypeScript')
  ]

  const addTodoHandler = (todoText: string) => {

  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos}/>
    </div>
  )
}

export default App
