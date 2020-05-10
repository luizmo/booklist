import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { List, Create, Edit } from './pages';
function App() {
  return (
    <Router>
      <Switch>
      <Route path="/edit/:id" component={Edit}/>
        <Route path="/new" component={Create}/>
        <Route path="/" component={List}/>
      </Switch>
    </Router>
  );
}

export default App;
