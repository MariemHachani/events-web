import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Login from './components/Login';

function App() {
  return (

    <Router>
      <div className='main'>
        <Switch>
          <Route path="/" exact >
            <Homepage></Homepage>
          </Route>
          <Route path="/About">
            <About></About>
          </Route>
          <Route path="/Login">
            <Login></Login>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
