import './App.css';
import Hello from './Hello';
import Wrapper from './wrapper';

function App() {
  const name = 'react';
  return (
    <div>
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
