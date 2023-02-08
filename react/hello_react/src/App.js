import './App.css';
import Hello from './Hello';
import Wrapper from './wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import InputsSample from './InputsSample';
import UserList from './UserList';
import { useCallback, useMemo, useReducer, useRef, useState } from 'react';
import CreateUser from './CreateUser';

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
        users: state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(
          user=>user.id === action.id ? {...user, active: !user.active}: user
        )
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(
          user=>user.id !== action.id)
      }
    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { inputs: { username, email } } = state;
  const { users } = state;
  const nextId = useRef(users.length);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      username,
      value
    })
  }, [])

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    })
    nextId.current += 1;
  }, [username, email])

  const onToggle = useCallback((id) => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    })
  })

  const onRemove = useCallback((id) => {
    dispatch({
      type: 'REMOVE_USER',
      id
    })
  })



  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}></CreateUser>
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      ></UserList>
      <div>활성 사용자수 : 0</div>
    </div>
  )
  /*
  const name = 'react';

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs(
        inputs => ({
          ...inputs,
          [name]: value,
        }))
    },
    []);

  const [users, setUsers] = useState([
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
  ])
  const nextId = useRef(4);
  const onCreate = useCallback(
    () => {
      const user = {
        id: nextId.current,
        username: username,
        email: email
      };
      setUsers(users => users.concat(user));
      setInputs({
        username: '',
        email: '',
      })
      nextId.current += 1;
    }, [inputs]);

  const onRemove = useCallback(
    id => {
      setUsers(users =>
        users.filter(user => user.id !== id)
      );
    },
    []);

  const onToggle = useCallback(
    id => {
      setUsers(users => (
        users.map(user => {
          return user.id === id ?
            {
              ...user,
              active: !user.active
            } : user
        })))
    },
    []);
 
  //const count = countActiveUsers(users);
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <div>
      
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      ></CreateUser>
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      ></UserList>
      <div>활성사용자 수 : {count}</div>
      <InputsSample></InputsSample>
      <InputSample></InputSample>
      <Counter></Counter>
      <Wrapper>
        <Hello />
        <Hello color="red" name={name} isSpecial={true}></Hello>
        <Hello color="yellow" name={name} isSpecial></Hello>
        <div className='gray-box'></div>
      </Wrapper>
    </div>
  ); */
}

export default App;
