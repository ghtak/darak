import './App.css';
import Hello from './Hello';
import Wrapper from './wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import InputsSample from './InputsSample';

function App() {
  const name = 'react';
  return (
    <div>
      <InputsSample></InputsSample>
      <InputSample></InputSample>
      <Counter></Counter>
      <Wrapper>
        <Hello/>
        <Hello color="red" name={name} isSpecial={true}></Hello>
        <Hello color="yellow" name={name} isSpecial></Hello>
        <div className='gray-box'></div>
      </Wrapper>
    </div>
  );
}

export default App;
