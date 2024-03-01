import React, { useState } from 'react';

function Counter() {

    const [count , setConut] =useState(0);


    const  counterdata = () =>{
        if (count<5) {
            setConut(count+1)   
        } 
    }

    const counterdataremvo = () =>{
        if (count>0) {
            setConut(count-1)   
        } 
    }

    return (
        <div>
          <h1>this plus {count}</h1>  
          <button  onClick={counterdata} disabled={count < 5 ? false : true} >+</button>
          <button  onClick={counterdataremvo} disabled={count > 0 ? false : true}>-</button>
        </div>
    );
}

export default Counter;