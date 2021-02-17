import React from 'react';
import {Link} from 'react-router-dom'

function NavBar(props) {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="SpaceX">SpaceX</Link>
            <Link to="Future">Future</Link>



        </div>
    );
}

export default NavBar;