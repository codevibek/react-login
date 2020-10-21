import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login.js'
import './App.css';
import Home from './Home'
import {auth} from './firebase'
import {useStateValue} from './StateProvider'


function App() {
    const [{}, dispatch] = useStateValue()
  useEffect(() => {
     auth.onAuthStateChanged(authUser=>{
      

       if (authUser){
          dispatch({
            type:'SET_USER',
            user: authUser
          })
       }
       else{
          dispatch({
            type:'SET_USER',
            user:null
          })
       }
     })}
      
  , [])
  return (
    <Router>
     
      <Switch>
        <Route exact path='/'>
        <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
