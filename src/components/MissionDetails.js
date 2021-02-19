import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Missiondetails(props) {
    console.log(props)

    let [missiondetails, setmissiondetails] = useState({})

    useEffect(() => {
        axios.get(`https://api.spacexdata.com/v3/missions/${props.mission_id}`).then((res) => { 
        console.log(res.data);
            setmissiondetails(res.data);
        });
    }, []);

    function eachmissionimage() {
        return missiondetails.flickr_images?.map(eachmissionimage => {
            return (
                <img src={eachmissionimage} />
            )
        })
    }
    return (
        <div className='missionDetails'>
            <p>{missiondetails.mission_id}</p>

            <p>{eachmissionimage()}</p>


        </div>
    );
}

export default Missiondetails;