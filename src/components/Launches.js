import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Launches(props) {
    let [launches, setLaunches] = useState({});


    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches').then((res) => {
            let rand = Math.floor(Math.random() * 100)

            console.log(res.data[rand])
            setLaunches(res.data[rand]);

        });
    }, []);


    return (
        <div className="launchesX">
            <h6>Launch Name:</h6>
            <p className="launchName">{launches.mission_name}</p>
            <h6>Year Of The Launch:</h6>
            <h2 className='launchYear'>{launches.launch_year}</h2>
            <h6>Rocket Model:</h6>
            <h3 className='modelRocket'>{launches.rocket?.rocket_name}</h3>
            <p className='rocketDescription'>{launches.details}</p>
            <p className='info'>More Info at:</p><a href='' className='artical'>{launches.links?.article_link}</a>
        </div>
    );
}
export default Launches;