import './css/bootstrap.min.css';
import './css/all.min.css';
import './css/todolist.css';
import TodoListContainer from './containers/TodoListContainer';

function App() {
  return (
    <TodoListContainer
      title="TO-DO LIST"
    />
  );
}

export default App;