import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counter';

function App() {

  const count = useSelector((state) => state.counter.count)       //From state reducer we select the counter(reducer from store.js), from counter we select the count variable(from counter.js function)
  // const count2 = useSelector(state => state.counter2.count2)
  
  const dispatch = useDispatch() //ye already present hota h redux m
  
  return (
    <div className="App">
      <div>The value of counter is {count}</div>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(incrementByAmount(33))}>Increment by 33</button>
    </div>
  );
}

export default App;
