import './App.css';
import Hello from './Hello';
import Wrapper from './wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import InputsSample from './InputsSample';
import UserList from './UserList';
import { useRef, useState } from 'react';
import CreateUser from './CreateUser';

function App() {
  const name = 'react';

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  const [users, setUsers] = useState([
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
  ])
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username: username,
      email: email
    };
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: '',
    })
    nextId.current += 1;
  }
  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      ></CreateUser>
      <UserList users={users}></UserList>
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
