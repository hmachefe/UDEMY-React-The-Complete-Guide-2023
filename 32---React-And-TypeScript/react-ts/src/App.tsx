import { useState } from 'react'
import './App.css'
import NewTodo from './components/NewTodo'
import Todos from './components/Todos'
import Todo from './models/Todo'

function App() {


  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos(previousTodos => {
      return previousTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos(previousTodos => {
      return previousTodos.filter(previousTodo => previousTodo.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  )
}

export default App
