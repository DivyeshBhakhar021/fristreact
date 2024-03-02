import React, { useState } from 'react'; // Import useState hook
import CityFunctiondata from './components/CityFunctiondata';

function CountryFun (){
    const [country, setCountry] = useState('Canada');
    const [time, setTimeZone] = useState("gmt+2:30");

    const changeCountry = () => {
        setCountry('USA');
        setTimeZone('gm-5')
    };
    
    return (
        <>
            <p>Country Function</p>
            <h1>This my Contry:- {country}</h1>
            <h1>TImeZone{time}</h1>
            <button className='button' onClick={changeCountry}>Change Country</button>

            <CityFunctiondata cn={country} />
        </>

    );
};

export default CountryFun;
