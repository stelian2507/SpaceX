import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Rocketdetails(props) {
    console.log(props)

    let [Rocketdetails, setRocketdetails] = useState([''])

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/rockets').then((res) => {
            console.log(res.data);
            setRocketdetails(res.data);
        });
    }, []);

    return (
        <div className='rocketDetails'>
            Falcone One
            {console.log('Rocket Details =', Rocketdetails?.[0].country)}
            {Rocketdetails?.[0].country}
            {/* {Rocketdetails.description}{Rocketdetails.engines}
            {Rocketdetails.first_flight}{Rocketdetails.flicker_image[1]} */}
        </div>
    );
}

export default Rocketdetails;