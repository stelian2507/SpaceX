import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Launches(props) {
    let [launches, setLaunches] = useState({});


    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches').then((res) => {
            //console.log(res.data[0].rocket_name);
            console.log(res.data)
            setLaunches(res.data);

        });
    }, []);

    const showlaunches = () => {
        return launches((eachlaunches) => {
            console.log(eachlaunches)
            return (
                <div>
                    {eachlaunches.data}
                    Cost Per Lunch:
                    {eachlaunches.data}
                </div>
            );
        });

    }
    return (
        <div className="launches">
            {launches.name} {launches.founder}
            {/* {showspacex()} */}
            HELOOOOOOOOOOOOOO
        </div>
    );
}
export default Launches;