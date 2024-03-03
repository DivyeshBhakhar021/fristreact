import React, { Component } from 'react';
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
        "addres":"" ,
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
        "addres":"simda" ,
        "desc": "hello"
    },
]
export default class DoctorClass extends Component {
  render() {
    return (
        <>
            {
                docterdata.map((v,i)=>(
                        // <>
                        // <p>{v.id}</p>
                        // <p>{v.name}</p>
                        // <p>{v.time}</p>
                        // </>
                   
                    <Crad  info={v} />
                )) 
            }
        </>
    );
  }
}





