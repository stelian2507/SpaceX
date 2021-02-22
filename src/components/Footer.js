import React from 'react';
import { Link } from 'react-router-dom'

function Footer(props) {
    return (
        <footer>
            <Link className="textLink" to="/">Powerd by:</Link>
            <Link className="textLink" to="https://www.linkedin.com/in/stelian-grosu">Stelian</Link>
            <Link className="textLink" to="https://www.linkedin.com/in/rastkodurica">Rastko</Link>
        </footer>
    );
}

export default Footer;