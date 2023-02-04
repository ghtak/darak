import React, { useEffect } from "react";



function User({ user, onRemove, onToggle }) {
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
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >{user.username}</b>
            <span>{user.email}</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            UserList
            {
                users.map(user =>
                (<User user={user}
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle} />))
                /*users.map((user, index) => { return <User user={user} key={index}/>})*/
            }
        </div>
    )
}

export default React.memo(UserList);