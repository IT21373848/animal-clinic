import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";

import Navbar from './components/NavBar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register';
import Profile from './components/Profile'
//import ServiceList from './Components/ServicesList'
//import ServiceAdd from './Components/ServicesAdd'


class App extends Component {
  render() {
    return(  
        <div className='App'>
          <Navbar/>
          <div className='container'>
         
          <Routes >
            <Route path = "/" element={<Landing/>}/>
            <Route path = "/register" element={<Register/>}/>
            <Route path = "/login" element={<Login/>}/>
            <Route path = "/profile" element={<Profile/>}/>
          </Routes>
         
          </div> 
          
        </div>
       
      );
  }
}







export default App;