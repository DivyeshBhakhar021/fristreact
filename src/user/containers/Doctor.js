import React from 'react';
import Crad from '../components/Crad';

const docterdata = [
    {
        "id": 1,
        "name": "Divyesh",
        "time": 8,
        "addres":"simda" ,
        "desc": "hello"
    },
    {
        "id": 2,
        "name": "yesh",
        "time": 7,
        "addres":"kamej" ,
        "desc": "hello"
    },
    {
        "id": 3,
        "name": "meet",
        "time": 6,
        "addres":"simda" ,
        "desc": "hello"
    },
    {
        "id": 4,
        "name": "kano",
        "time": 9,
        "addres":"vasu" ,
        "desc": "hello"
    },
]

function Doctor() {
    return (
        <>
            {
               docterdata.map((v,i)=>(
                    // <>
                    // <p>{v.name}</p>
                    // <p>{v.time}</p>
                    // </>
                    
                    <Crad  info={v} />
                   
               )) 
            }
        </>
    );
}

export default Doctor;