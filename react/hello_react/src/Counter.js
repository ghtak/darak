import React, { useState } from "react";

function Counter() {
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