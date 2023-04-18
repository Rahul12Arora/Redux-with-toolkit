import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counter';

function App() {

  const {count} = useSelector((state) => state.counter)
  // const count = useSelector(state => state.counter.count)      //redux state => counter reducer => count variable inside counter reducer
  
  const dispatch = useDispatch()
  
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
