import React from 'react';
import { Link } from 'react-router-dom'

function NavBar(props) {
    return (
        <nav id='navigationBar'>
            <Link to="/">Space Ship</Link>
            <Link to="Future">Future</Link>
            <Link to="SpaceX">SpaceX</Link>


        </nav>
    );
}

export default NavBar;