import React from 'react';
import { Link } from 'react-router-dom'

function NavBar(props) {
    return (
        <nav id='navigationBar'>
            <Link className="textLink" to="/">Space Ship</Link>
            <Link className="textLink" to="/Missions">Missions</Link>
            <Link className="textLink" to="/Launches">Launches</Link>


        </nav>
    );
}

export default NavBar;