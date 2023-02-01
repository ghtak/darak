import React from "react";

const users = [
    {
        id: 1,
        username: 'ghtak',
        email: 'ghtak@gmail.com'
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
    }
]

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b>
            <span>{user.email}</span>
        </div>
    )
}

function UserList() {
    return (
        <div>
            UserList
            {
            users.map(user=> (<User user={user} key={user.id}/>))
            /*users.map((user, index) => { return <User user={user} key={index}/>})*/
            }
        </div>
    )
}

export default UserList;