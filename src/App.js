import './App.css'
import AddTodo from './components/AddTodo';
import './components/FontawesomeIcons'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <h1 className='title'>Todo List Redux</h1>
      <AddTodo/>
      <TodoList />
    </div>
  );
}

export default App;
