import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SpaceShips(props) {
    let [space, setspace] = useState(['']);



    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/rockets').then((res) => {
            console.log(res.data[0].rocket_name);
            setspace(res.data);
        });
    }, []);

    const showspace = () => {
        return space.map((eachspace) => {
            console.log(eachspace)
            return (
                <div className='rockets'>
                    {eachspace.rocket_name}
                    <Link to={`/SpaceShips/${eachspace.rocket_id}`} ><img src={eachspace.flickr_images} /></Link>
                </div>
            );
        });
    };

    return (
        <div className='spaceShips'>
            Space Ships
            {showspace()}

        </div>
    );
}

export default SpaceShips;