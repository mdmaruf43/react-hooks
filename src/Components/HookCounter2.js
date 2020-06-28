import React, { useState } from 'react'

function HookCounter2() {
    const initialization = 0;
    const [count, setCount] = useState(initialization);

    const incrementFive = () => {
        for(let i = 1; i<=5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    }
    return (
        <div>
            Count: {count} <br />
            <button onClick={() => setCount(initialization)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default HookCounter2
