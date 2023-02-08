import React, { useCallback, useContext, useRef } from "react";
import { UserDispatch } from "./App";

function CreateUser({ username, email }) {
    const nextId = useRef(4);
    const dispatch = useContext(UserDispatch);
    const onChange = useCallback((e)=>{
        const { name, value } = e.target;
        dispatch({
          type: 'CHANGE_INPUT',
          name,
          value
        })
    })
    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            ></input>
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            ></input>
            <button onClick={()=>{
                dispatch({
                    type: 'CREATE_USER',
                    user: {
                      id: nextId.current,
                      username,
                      email
                    }
                  })
                  nextId.current += 1;
            }}>등록</button>
        </div>
    )
}

export default React.memo(CreateUser);