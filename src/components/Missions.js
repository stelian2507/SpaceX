import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Missions(props) {
    let [mission, setMission] = useState(['']);

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/missions').then((res) => {
          console.log(res.data)
            setMission(res.data);
        });
    }, []);

    const showmission = () => {
        return mission.map((eachmission) => {
            console.log(eachmission)
            return (
                <div className="missionX">
                   <h1 className="spaceShips">{eachmission.mission_name}</h1> 
                    <p className="rocketDescription">{eachmission.description}</p>
                    

    
                </div>
            );
        });
    };
    return (
        <div className="missionOne">

            MISSION
            
          {showmission()}
        </div>
    );
}

export default Missions;