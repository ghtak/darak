import React, { useEffect, useContext, useCallback } from "react";
import { UserDispatch } from "./App";


const User = React.memo(function User({ user }) {
    /*
    useEffect(() => {
        console.log("mount " + user.username);
        return () => {
            console.log("unmount " + user.username)
        }
    }
    //) // 리렌더링 될때마다 호출
    //,[]) // 최초 마운트시만 호출
    ,[user])// user 값이 변화될때 호출
    */
    const dispatch = useContext(UserDispatch);
    const onToggle = useCallback(id => {
        dispatch({
            type: 'TOGGLE_USER',
            id
        })
    })
    const onRemove = useCallback(id => {
        dispatch({
            type: 'REMOVE_USER',
            id
        })
    })
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >{user.username}</b>
            <span> {user.email}</span>
            <span> {user.id}</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
});

function UserList({ users }) {
    return (
        <div>
            UserList
            {
                users.map(user =>
                (<User user={user}
                    key={user.id} />))
                /*users.map((user, index) => { return <User user={user} key={index}/>})*/
            }
        </div>
    )
}

export default React.memo(UserList);