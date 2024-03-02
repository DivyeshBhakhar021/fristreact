import React from 'react';

function Crad({data}) {
    console.log(data);
    return (
        <>
           {
            <>
            <p>{data.name}</p>
            <p>{data.price}</p>
            </>
           } 
        </>
    );
}

export default Crad;