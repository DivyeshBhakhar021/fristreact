import React from 'react';

function CityFunctiondata(props) {
    console.log(props.cn);
    return (
        <div>
            <h1>{props.cn === "Canada" ? "Polen" : "New york"}</h1>
        </div>
    );
}

export default CityFunctiondata;