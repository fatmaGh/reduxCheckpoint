import './App.css'
import {useState} from 'react'
import AddTodo from './components/AddTodo';
import './components/FontawesomeIcons'
import TodoList from './components/TodoList'
import FilterTodo from './components/FilterTodo'

function App() {
  const[done, setDone] = useState(false);
  const[unDone, setUnDone] = useState(false);
  return (
    <div className="App">
      <h1>What's the plan for Today</h1>
      <FilterTodo setDone={setDone} setUnDone={setUnDone} />
      <div>        
        <div className='App__container'>
          <TodoList done={done} undone={unDone} />
          <AddTodo/>
        </div>
      </div>
    </div>
  );
}

export default App;
