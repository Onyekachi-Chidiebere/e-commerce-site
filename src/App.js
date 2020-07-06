import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

const App =()=>{
  return (
    <Router>
      <div>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route component={Error}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
