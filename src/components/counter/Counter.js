import React, { useState } from 'react'
import "./Counter.css"
import { Button } from '../button';

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        if(counter > 0) {
            setCounter(counter - 1);
        }
    };

    const reset = () => {
        setCounter(0);
    };

  return (
    <div id="counter-container">
        <h2>Counter App</h2>
        <div id="counter">
            <span id='count'> {counter}</span>
            
            <div id="button-container">
                <Button id="increment" onClick={increment}>+</Button>
                <Button id="decrement" onClick={decrement}>-</Button>
                <Button id="reset" onClick={reset}>RESET</Button>
            </div>
        </div>
    </div>
  )
};
