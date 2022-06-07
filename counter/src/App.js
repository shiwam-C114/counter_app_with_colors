import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(2)
  return (
    <div className={count%2?"green-app":"red-app"}>
      <h1>Counter</h1>
      <h3>count: {count}</h3>
      <button onClick={()=>{setCount(count+1)}}>inc.</button>
      <button onClick={()=>{setCount(count-1)}}>dec.</button>
      <br></br>
      <button onClick={()=>{setCount(count*2)}}>Double</button>
    </div>
  );
}

export default App;
