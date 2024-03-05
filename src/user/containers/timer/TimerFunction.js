import React, { useState, useEffect } from "react";
import stlye from './Timer.module.css'

function TimerFunction(props) {

    //1
    const [time, setTime] = useState(new Date(),console.log(" 1 Frist"));

    //4
    const tick = () => {
        console.log("4 tick");
        setTime(new Date());
    };

   // 2
    useEffect(() => {
        console.log("2 componentDidMount");
        // setTime(new Date())

        const timeRef = setInterval(tick, 1000);
    
        
    })

    //3
    useEffect(() => {
        console.log("3 componentDidUpdate");
    });


    
    return (
        <div className={stlye.container}>
            <div className={stlye.card}>
                <h1>TimerFunction</h1>
                <h3>{time.toLocaleString()}</h3>
            </div>
        </div>
    );
}

 export default TimerFunction;