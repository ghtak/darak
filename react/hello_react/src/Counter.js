import React, { useReducer, useState } from "react";

function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function Counter() {
    /*
    const [number, setNumber] = useState(0)
    const onIncrese = () => {
        //setNumber(number+1);
        //setNumber(p=>p+1);
        setNumber(
            (p)=>{
                return p+1;
            }
        )
    }
    const onDecrease = () => {
        setNumber(number-1);
    }*/
    const [number, dispatch] = useReducer(reducer,0)
    const onIncrese = () => {
        dispatch({
            type: 'INCREMENT'
        });
    }
    const onDecrease = () => {
        dispatch({
            type: 'DECREMENT'
        })
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrese}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;