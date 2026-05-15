import { useState } from 'react';

export const Count = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    return (
        <>
            <button onClick={decrement} disabled={count === 0}>
                -1
            </button>
            <span>{count}</span>
            <button onClick={increment} disabled={count === 10}>
                +1
            </button>
        </>
    );
};
