import React, { useState, useRef } from "react";

function InputsSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickName: '',
    });

    const { name, nickName } = inputs;

    // dom select
    const targetRef = useRef();

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickName: '',
        })
        // dom select
        targetRef.current.focus();
    }
    return (
        <div>
            <input name="name"
                placeholder="name"
                onChange={onChange}
                value={name}
                ref={targetRef} ></input>
            <input name="nickName" placeholder="nickName" onChange={onChange} value={nickName}></input>
            <button onClick={onReset}>Reset</button>
            <div>
                <b>{name} ({nickName})</b>
            </div>
        </div>
    )
}

export default InputsSample;