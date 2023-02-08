import { Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth.js';
import Posts from './components/Posts.js';

function App() {
  return (
    <div className="App">
      <h1>Bulletin Board</h1>
      <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/auth/:type" component={Auth} />
      </Switch>

      <Auth />
    </div>
  );
}

export default App;
