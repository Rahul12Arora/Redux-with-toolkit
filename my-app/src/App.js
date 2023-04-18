import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const [counter, setCounter] = useState(0);
  // const {count} = useSelector(state => state.counter)
  const count = useSelector(state => state.counter.count)
  function increment(){
    setCounter(counter+1)
  }
  function decrement(){
    setCounter(counter-1)
  }
  return (
    <div className="App">
      <div>The value of counter is {counter}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
