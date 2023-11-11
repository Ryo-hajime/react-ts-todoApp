import './App.css'
import { InputTodo } from './components/InputTodo'
import { TodoList } from './components/TodoList'
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <RecoilRoot>
      <>
        <InputTodo />
        <TodoList />
      </>
    </RecoilRoot>
  )
}

export default App
