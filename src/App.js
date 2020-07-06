import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Products from './components/Product/Product';
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

const App =()=>{
  return (
    <Router>
      <div>
      <NavBar/>  
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/products' component={Products} />
        <Route component={Error}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
