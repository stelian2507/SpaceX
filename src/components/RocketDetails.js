import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Rocketdetails(props) {
    console.log(props)

    let [Rocketdetails, setRocketdetails] = useState([''])

    // useEffect(() => {
    //     axios.get('https://api.spacexdata.com/v3/rockets').then((res) => {
    //         console.log(res.data[0]);
    //         setRocketdetails(res.data[0]);
    //     });
    // }, []);

    return (
        <div className='rocketDetails'>
            Falcone One
            {/* {Rocketdetails.description}{Rocketdetails.engines}
            {Rocketdetails.first_flight}{Rocketdetails.flicker_image[1]} */}
        </div>
    );
}

export default Rocketdetails;