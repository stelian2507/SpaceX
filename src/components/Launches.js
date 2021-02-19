import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Launches(props) {
    let [launches, setLaunches] = useState({});


    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches').then((res) => {
            console.log(res.data)
            setLaunches(res.data);

        });
    }, []);

    const showlaunches = () => {
        return launches.map((eachlaunches) => {
            console.log(eachlaunches)
            return (
                <div>
                    {eachlaunches.data}
                    Cost Per Lunch:
                    {eachlaunches.data}
                </div>
            );
        });

    };
    return (
        <div className="launchesX">
            {/* {launches.name}  */}
            HELOOOOOOOOOOOOOO
            {showlaunches}
        </div>
    );
}
export default Launches;