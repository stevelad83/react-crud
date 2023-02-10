import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth.js';
import EditPost from './components/EditPost.js';
import Header from './components/Header.js/Header.js';
import NewPost from './components/NewPost.js';
import Posts from './components/Posts.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/posts/edit/:id" component={EditPost} />
        <Route path="/posts/new" component={NewPost} />
        <Route path="/posts" component={Posts} />
        <Route path="*">
          <Redirect to="auth/sign-in" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
