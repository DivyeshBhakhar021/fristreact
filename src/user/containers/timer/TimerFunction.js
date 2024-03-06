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

   
    useEffect(() => {
        console.log("2 componentDidMount");

        //3  4
        const timeRef = setInterval(tick, 1000);
    
        //5
        return () => {
            console.log("componentWillUnmount");
            clearInterval(timeRef);
        };
    },[]) //4 call (time,props,state)

    //2
    return ( 
        <div className={stlye.container}>
            <div className={stlye.card}>
                <h1>Watch</h1>
                <h3 className={stlye.font}>{time.toLocaleTimeString()}</h3>
            </div>
        </div>
    );
}

 export default TimerFunction;