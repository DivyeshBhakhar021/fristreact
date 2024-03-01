import React, { useState } from 'react';

const CityFun = () => {
    const [city, setCity] = useState('New York');

    const changeCity = () => {
        setCity('UK');
    };

    return (
        <div>
            <p>City Fun</p>
            <h1>MY City Name is:-{city}</h1>
            <button className='button' onClick={changeCity}>Change City</button>
        </div>
    );
};

export default CityFun;
