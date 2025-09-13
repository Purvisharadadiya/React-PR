import { useEffect, useState } from 'react';
import './couter.css'

function Couter() {

  let [Count, setCount] = useState(0);

  useEffect(() => {
    let c = JSON.parse(localStorage.getItem('count'));
    if (c !== null) {
      setCount(c);
    }
  }, []);

  let decrement = () => {
    if (Count > 0) {
      let newcount = Count - 1;
      setCount(newcount);
      localStorage.setItem('count', JSON.stringify(newcount));
    } else {
      alert("count can not minus ...! ");
    }
  }

  let increment = () => {
    let newcount = Count + 1;
    setCount(newcount);
    localStorage.setItem('count', JSON.stringify(newcount));
  }

  let reset = () => {
    let newcount = 0;
    setCount(newcount);
    localStorage.setItem('count', JSON.stringify(newcount));
  };

  return (
    <>
      <div className="counter-card">
        <h1>Counter App</h1>
        <div className="counter-value">{Count}</div>
        <div className="counter-buttons">
          <button className="counter-btn" onClick={increment}>+</button>
          <button className="counter-btn reset-btn" onClick={reset}>⟳</button>
          <button className="counter-btn" onClick={decrement}>-</button>
        </div>
      </div>
    </>
  )
}

export default Couter;
