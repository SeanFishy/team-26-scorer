import React, { useState } from "react";

export function Counter({
    initialLabel
}: {
    initialLabel: string;
}): JSX.Element {
    const [count, setCount] = useState<number>(0);
    const [label] = useState<string>(initialLabel);
    return (
        <div>
            <div>{label}</div>
            <div>Currently: {count}</div>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
}
