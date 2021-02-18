import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home(props) {
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
                    <Link to='./Info' ><img src={eachspace.flickr_images} /></Link>


                </div>
            );
        });
    };

    return (
        <div>
            {showspace()}

        </div>
    );
}

export default Home;