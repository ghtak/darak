import React, { useState } from "react";

function InputsSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickName: '',
    });

    const { name, nickName } = inputs;

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
    }
    return (
        <div>
            <input name="name" placeholder="name" onChange={onChange} value={name} ></input>
            <input name="nickName" placeholder="nickName" onChange={onChange} value={nickName}></input>
            <button onClick={onReset}>Reset</button>
            <div>
                <b>{name} ({nickName})</b>
            </div>
        </div>
    )
}

export default InputsSample;