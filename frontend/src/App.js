import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import MainNavigation from './components/Navigation/MainNavigation';

import AuthPage from './pages/Auth';
import BookingsPage from './pages/Booking';
import EventsPage from './pages/Events';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
      <MainNavigation/>
      <main className ="main-content">
      <Switch>
            <Redirect from="/" to="/auth" exact />
            <Route path="/auth" component = {AuthPage} />
            <Route path="/events" component = {EventsPage} />
            <Route path="/booking" component = {BookingsPage} />
         </Switch>
      </main>
      </React.Fragment>
      </BrowserRouter>
    );
  } 
}

export default App;