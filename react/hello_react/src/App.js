import './App.css';
import Hello from './Hello';
import Wrapper from './wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import InputsSample from './InputsSample';
import UserList from './UserList';
import { useCallback, useMemo, useRef, useState } from 'react';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log("counting users")
  return users.filter(user => user.active).length;
}


function App() {
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
      setUsers(users=>
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
  );
}

export default App;
