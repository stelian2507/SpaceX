import React from 'react';
import { Link } from 'react-router-dom'

function Footer(props) {
    return (
        <footer>
            {/* <Link className="textLink" to="/">Powerd by:</Link>
            <Link className="textLink" to="https://www.linkedin.com/in/stelian-grosu">Stelian</Link>
            <Link className="textLink" to="https://www.linkedin.com/in/rastkodurica">Rastko</Link> */}
            <p className='footerP'>Power By:
            <a href='https://www.linkedin.com/in/stelian-grosu'>Stelian</a>&
                <a href='https://www.linkedin.com/in/rastkodurica'>Rastko</a>
            </p>
        </footer>
    );
}

export default Footer;