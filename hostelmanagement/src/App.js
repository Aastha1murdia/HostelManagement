import './App.css';
import React from 'react'
import Navbar from './Component/Navbar';
import {BrowserRouter as Router,Switch,Redirect,Route} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import MyGallery from './Component/MyGallery';
import Login from './Component/Login';
import Registration from './Component/Registration';
import Payment from './Component/Payment';


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
          <Route path='/MyGallery' exact>
            <MyGallery/>
          </Route>
          <Route path='/Contact' exact>
            <Contact/>
          </Route>
          <Route path='/Login' exact>
            <Login/>
          </Route>
          <Route path='/Registration' exact>
            <Registration/>
          </Route>
          <Route path='/Payment' exact>
            <Payment/>
          </Route>
          <Redirect to="/"/>
        </Switch>
      </main>
   </Router>
    
   </> 
   );
}

export default App;
