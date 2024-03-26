import React from 'react';
import { useDispatch } from 'react-redux';
import { incremnet } from '../../../reduct/action/counter.action';

function Counter(props) {

    const dispatch = useDispatch()
    const handalinc = () => {
        dispatch(incremnet())
    }

    const handaldec = ()=>{
        dispatch()
    }

    return (
        <div>
            <button onClick={handalinc}>+</button>
            {0}
            <button onClick={handaldec}>-</button>
        </div>
    );
}

export default Counter;