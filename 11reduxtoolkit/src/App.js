import './App.css';
import Todos from './Componets/Todos';
import AddTodo from './Componets/AddTodo';

function App() {
  return (
    <div className="App flex flex-col items-center justify-start">
      <AddTodo  />
      <Todos />

    </div>
  );
}

export default App;
