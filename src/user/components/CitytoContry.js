import React, { useState } from 'react';

const cityToCountry = {
    NewYork: "United States",
    London: "United Kingdom",
    Paris: "France",
};

const getCountryFromCity = (city) => {
    return cityToCountry[city];
}


const CityToCountryDisplay = () => {
    const [selectedCity, setSelectedCity] = useState("india");
    const [selectedCountry, setSelectedCountry] = useState("surat");

    const handleClick = (city) => {
        const country = getCountryFromCity(city);
        setSelectedCity(city);
        setSelectedCountry(country);
    }

    return (
        <div>
            <h1>City to Country Display</h1>
            <h3>Selected City: {selectedCity}</h3>
            <h3>Corresponding Country: {selectedCountry}</h3>


            <div>
                <button onClick={() => handleClick("NewYork")}>New York</button>
                <button onClick={() => handleClick("London")}>London</button>
                <button onClick={() => handleClick("Paris")}>Paris</button>
            </div>

        </div>
    );
}

export default CityToCountryDisplay;
