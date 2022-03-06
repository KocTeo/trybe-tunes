import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/search" component={ Search } />
            <Route path="/album/:id" component={ Album } />
            <Route path="/favorites" component={ Favorites } />
            <Route exact path="/profile" component={ Profile } />
            <Route path="/profile/edit" component={ ProfileEdit } />
            <Route exact path="/*" component={ NotFound } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
