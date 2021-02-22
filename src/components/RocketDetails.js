import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Rocketdetails(props) {
    console.log(props.match.params.rocket_id)

    let [rocketdetails, setrocketdetails] = useState({})

    useEffect(() => {
        axios.get(`https://api.spacexdata.com/v3/rockets/${props.match.params.rocket_id}`).then((res) => {
            console.log(res.data);
            setrocketdetails(res.data);
        });
    }, []);

    function eachimage() {
        return rocketdetails.flickr_images?.map(eachimage => {
            return (
                <img className="detailImg" src={eachimage} />
            )
        })
    }
    return (
        <div className='rocketDetails'>
            <p className="spaceShips">{rocketdetails.rocket_name}</p>

            <p className="rocketDescription">{rocketdetails.description}</p>
            <p>{eachimage()}</p>


        </div>
    );
}

export default Rocketdetails;