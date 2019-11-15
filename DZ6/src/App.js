import React from 'react';
import Menu from './posts';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

export default function App() {
  return (
  <Router>
    <Route path='/posts' component = {Menu} />
    <Route path='/' render={() => <Redirect to="/posts" />} />
  </Router>
  )
}
