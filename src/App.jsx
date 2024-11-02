import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './ReduxToolkit/CounterSlice';

function App() {
  const myState = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className='box'>
      <h1>Redux Toolkit</h1>
      <br/>
      <br/>
      <input type="text" value={myState}  />
      <br/>
      <br/>
      <div className='btn-div'>
        <button className="btn" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className="btn" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
      
    </div>
  );
}

export default App;


