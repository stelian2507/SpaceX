import React from 'react';
import { Link } from 'react-router-dom'

function NavBar(props) {
    return (
        <nav id='navigationBar'>
            <Link to="/">Home</Link>
            <Link to="SpaceX">SpaceX</Link>
            <Link to="Future">Future</Link>



        </nav>
    );
}

export default NavBar;