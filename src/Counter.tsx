import React, { useState } from "react";

export function Counter(): JSX.Element {
    const [count, setCount] = useState<number>(0);
    return (
        <div>
            <div>Currently: {count}</div>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}
