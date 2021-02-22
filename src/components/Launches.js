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
            <p className="spaceShips">{launches.mission_name}</p>
            <h2>{launches.launch_year}</h2>
            <h3>{launches.rocket?.rocket_name}</h3>
            <p className='rocketDescription'>{launches.details}</p>
            <p className='info'>More Info at:</p><a href='' className='artical'>{launches.links?.article_link}</a>
        </div>
    );
}
export default Launches;