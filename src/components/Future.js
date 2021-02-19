import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Future(props) {
    let [future, setmission] = useState(['']);

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/missions').then((res) => {
          console.log(res.data)
            setmission(res.data);
        });
    }, []);

    const showfuture = () => {
        return future.map((eachfuture) => {
            console.log(eachfuture)
            return (
                <div className='futures'>
                    {eachfuture.mission_name}
                    <Link to={`/Future/${eachfuture.mission_id}`} ><img src={eachfuture.flickr_images} /></Link>
                </div>
            );
        });
    };
    return (
        <div className='missionsX'>

            MISSION
            MISSION
            MISSION
            MISSION
            MISSION
            MISSION
            MISSION
            MISSION
            {showfuture}
        </div>
    );
}

export default Future;