import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrmnet, incremnet } from '../../../reduct/action/counter.action';

function Counter(props) {

    const dispatch = useDispatch()
    const count = useSelector(state => state.counter.count);
    console.log(count);



    const handalinc = () => {
        dispatch(incremnet())
    }

    const handaldec = () => {
        dispatch(decrmnet())
    }

    return (
        <div>
            <h1> Increment And Decrment</h1>
            <button onClick={handalinc}>+</button>
            {count}
            <button onClick={handaldec}>-</button>
        </div>
    );
}

export default Counter;