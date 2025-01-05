import './App.css'
import Todos from './components/Todos'

function App() {

  return (
    <div>
      <Todos items={['learn React', 'learn TypeScript']}/>
    </div>
  )
}

export default App
