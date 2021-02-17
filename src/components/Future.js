import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home(props) {
    let [space, setspace] = useState(['']);

    const randNum = Math.floor(Math.random() * 255);

    let style = {
        backgroundColor: `rgb(${randNum},${randNum},${randNum})`,
    };

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
                <div>
                    {eachspace.rocket_name}
                    Cost Per Lunch:
                    {eachspace.cost_per_launch}
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