import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SpaceX(props) {
    let [spacex, setspacex] = useState({});
    

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/info').then((res) => {
            //console.log(res.data[0].rocket_name);
            console.log(res.data)
            setspacex(res.data);
           
        });
    }, []);

    // const showspacex = () => {
    //     return spacex.((eachspacex) => {
    //         console.log(eachspacex)
    //         return (
    //             <div>
    //                 {eachspacex.data}
    //                 Cost Per Lunch:
    //                 {eachspacex.data}
    //             </div>
    //         );
    //     });
    
    // }
    return (
        <div>
        {spacex.name} {spacex.founder}
            {/* {showspacex()} */}
        </div>
    );
    }
export default SpaceX;