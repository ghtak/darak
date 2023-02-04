import React from "react";



function User({ user }) {
    return (
        <div>
            <b>{user.username}</b>
            <span>{user.email}</span>
        </div>
    )
}

function UserList({ users }) {
    return (
        <div>
            UserList
            {
                users.map(user => (<User user={user} key={user.id} />))
                /*users.map((user, index) => { return <User user={user} key={index}/>})*/
            }
        </div>
    )
}

export default UserList;