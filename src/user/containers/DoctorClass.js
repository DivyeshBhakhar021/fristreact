import React, { Component } from 'react';
import Card from '../components/card/Card';

const docterdata = [
    {
        "Drid": 1,
        "Drname": "Divyesh",
        "time": 8,
        "addres":"simda" ,
        "drdesc": "hello"
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
    constructor(props) {
        super(props);
    }
    
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
                   
                    <Card  data={v} />
                )) 
            }
        </>
    );
  }
}





