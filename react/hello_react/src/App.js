import './App.css';
import Hello from './Hello';
import Wrapper from './wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import InputsSample from './InputsSample';
import UserList from './UserList';
import { useCallback, useMemo, useReducer, useRef, useState } from 'react';
import CreateUser from './CreateUser';
import React from 'react';

function countActiveUsers(users) {
  console.log("counting users")
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: '',
  },
  users: [
    {
      id: 1,
      username: 'ghtak',
      email: 'ghtak@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ],
}

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      }
    case 'CREATE_USER':
      return {
        ...state,
        inputs: {
          username: '',
          email: '',
        },
        users: state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(
          user => user.id === action.id ? { ...user, active: !user.active } : user
        )
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(
          user => user.id !== action.id)
      }
    default:
      return state;
  }
}

export const UserDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { inputs: { username, email } } = state;
  const { users } = state;
  const userlength = users.length + 1;
  const active = useMemo(
    () => countActiveUsers(users), [users]
  )
  return (
    <div>
      <Hello></Hello>
      <UserDispatch.Provider value={dispatch}>
        <CreateUser
          username={username}
          email={email}
          userlength={userlength}
        ></CreateUser>
        <UserList
          users={users}
        ></UserList>
        <div>?????? ???????????? : {active}</div>
      </UserDispatch.Provider>
    </div>
  )
}

export default App;
