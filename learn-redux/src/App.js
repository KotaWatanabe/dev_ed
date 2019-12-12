import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {increment, decrement, login, logout} from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const name = useSelector(state => state.isLogged.name);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br/>

      <button onClick={() => dispatch(login())}>Log In</button>
      <button onClick={() => dispatch(logout())}>Log Out</button>
      {isLogged ? <h3>Logged In</h3>: <h3>Logged Out</h3>}
      
    </div>
  );
}

export default App;
