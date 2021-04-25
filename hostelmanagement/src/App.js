import './App.css';
import React from 'react'
import Navbar from './Component/Navbar';
import {BrowserRouter as Router,Switch,Redirect,Route} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Registration from './Component/Registration';
import LoginIn from './Component/LoginIn';
function App() {
  return (
   <>
   <Router>
      <Navbar/>
      <main>
        <Switch>
          <Route path='/' exact >
            <Home/>
          </Route> 
          <Route path='/About' exact>
            <About/>
          </Route>
          <Route path='/Registration' exact>
            <Registration/>
          </Route>
          <Route path='/Contact' exact>
            <Contact/>
          </Route>
          <Route path='/LoginIn' exact>
            <LoginIn/>
          </Route>
          <Redirect to="/"/>
        </Switch>
      </main>
   </Router>
    
   </> 
   );
}

export default App;
