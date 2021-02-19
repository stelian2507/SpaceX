import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'react-router-dom';


function Future(props) {
    let [mission, setmission] = useState(['']);

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/missions').then((res) => {
            console.log(res.data[0].mission_name)
            setmission(res.data);
        })
    })
    return (
        <div>

            MISSION
            MISSION
            MISSION
            MISSION
            MISSION
            MISSION
            MISSION
            MISSION
        </div>
    );
}

export default Future;