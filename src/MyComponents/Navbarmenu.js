import React from 'react';
import{NavLink} from 'react-router-dom';

const Navbarmenu = ()=> {
    return(<div>
        <NavLink exact to='/' >Home</NavLink>
        <NavLink exact to='/projects' >Projects</NavLink>
        <NavLink exact to='/services' >Services</NavLink>
        <NavLink exact to='/contact' >Contact</NavLink>
   </div> )
}
export default Navbarmenu;