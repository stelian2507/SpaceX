import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Launches(props) {
    let [launches, setLaunches] = useState({});


    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches').then((res) => {
            let rand = Math.floor(Math.random() * 50)
              
        console.log(res.data[rand])
            setLaunches(res.data[rand]);

        });
    }, []);

    const showlaunches = () => {
        return launches.map((eachlaunches) => {
            console.log(eachlaunches)
            return (
                <div className='launchesS'>
                    {eachlaunches.data}
                    
                
                </div>
            );
        });

    };
    return (
        <div className="launchesX">
            HELOOOOOOOOOOOOOO
            {launches.links?.article_link}
            {showlaunches}
        </div>
    );
}
export default Launches;