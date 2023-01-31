import './App.css';
import Hello from './Hello';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <div>
      <Hello/>
      <Hello name={name}>
        <p style={style}>{name}</p>
      </Hello>
      <div className='gray-box'></div>
    </div>
  );
}

export default App;
