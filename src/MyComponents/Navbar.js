import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Services from './Services'
import Projects from './Projects'
import Navbarmenu from './Navbarmenu.js';
const Navbar = () => {
   
return( 
        <>
        <Navbarmenu/>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route  path='/projects' component={Projects}/>
        <Route  path='/services' component={Services}/>
        <Route  path='/contact' component={Contact}/>
        </Switch>
        </>);
}
export default Navbar;