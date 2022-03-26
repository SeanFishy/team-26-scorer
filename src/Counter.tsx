import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter({
    initialLabel
}: {
    initialLabel: string;
}): JSX.Element {
    const [count, setCount] = useState<number>(0);
    const [label] = useState<string>(initialLabel);
    return (
        <div className="flex-item">
            <div style={{ fontSize: "27px" }}>{label}</div>
            <div style={{ fontSize: "20px" }}>Currently: {count}</div>
            <Button
                style={{
                    width: "150px",
                    backgroundColor: "#1A4A5A"
                }}
                onClick={() => setCount(count + 1)}
            >
                Increase
            </Button>
            <Button
                style={{
                    width: "150px",
                    backgroundColor: "#1A4A5A"
                }}
                onClick={() => setCount(count - 1)}
            >
                Decrease
            </Button>
        </div>
    );
}
