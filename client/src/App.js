import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home'; 
import './App.css'; 
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 

class App extends React.Component {
  render() {
   return(
   <Router>
     <div>
       <Route exact path='/' component={Register}/> 
       <Route path='/login' component={Login}/> 
       <Route path='/register' component={Register}/> 
       <PrivateRoute exact path="/protected" component={Home} />
     </div>
     </Router>
   )
  };
}

export default App;
