import './css/bootstrap.min.css';
import './css/all.min.css';
import './css/todolist.css';
import TodoListContainer from './containers/TodoListContainer';
import SuccessPage from './containers/SuccessPage';
import Navigation from './components/Navigation';
import {
  BrowserRouter as Router,
  Switch, 
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <main>
        <section className="pb-0">
          <div className="container">
            <Navigation />
          </div>
        </section>
      </main>
      <Switch>
        <Route path="/success-page">
          <SuccessPage />
        </Route>
        <Route path="/todo-list">
          <TodoListContainer
            title="TO-DO LIST"
          />
        </Route>
        <Route path="/">
          <TodoListContainer
            title="TO-DO LIST"
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;