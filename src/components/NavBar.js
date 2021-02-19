import React from 'react';
import { Link } from 'react-router-dom'

function NavBar(props) {
    return (
        <nav id='navigationBar'>
            <Link to="/">Space Ship</Link>
            <Link to="/Missions">Missions</Link>
            <Link to="/Launches">Launches</Link>


        </nav>
    );
}

export default NavBar;