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
          <img src={eachimage}/>
       
            )
        })
    }


    // https://api.spacexdata.com/v3/rockets/{{rocket_id}}
    return (
        <div className='rocketDetails'>
           <p>{rocketdetails.rocket_name}</p> 
           
            <p>{rocketdetails.description}</p>
           <p>{eachimage()}</p>

            
        </div>
    );
}

export default Rocketdetails;