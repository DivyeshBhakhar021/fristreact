import React from 'react';

function Crad({ data ,info}) {
    return (
        <>
            {data && (
                <div className='information'>
                    <div className="card">
                        <p className="data"><b>ID:</b> {data.id}</p>
                        <p className="data"><b>Name: </b>{data.name}</p>
                        <p className="data"><b>Price:</b> {data.price}</p>
                        <p className="data"><b>Expiry:</b> {data.expiry}</p>
                        <p className="data"><b>Description:</b> {data.desc}</p>
                    </div>
                </div>
            )}
            {info &&(
                <div className='information'>
                    <div className="card">
                        <p className="data"><b>ID:</b> {info.id}</p>
                        <p className="data"><b>Name: </b>{info.name}</p>
                        <p className="data"><b>Address:</b> {info.addres}</p> 
                        <p className="data"><b>Description:</b> {info.desc}</p> 
                    </div>
                </div>
            )}
            
        </>
    );
}

export default Crad;
