import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./App.css";
import { Counter } from "./Counter";

function App(): JSX.Element {
    const [counters, setCounters] = useState<JSX.Element[]>([
        <Counter key="initial" initialLabel="Text"></Counter>
    ]);
    const [label, setLabel] = useState<string>("");
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <span>Hello!</span>
            {counters.map((curr: JSX.Element): JSX.Element => curr)}
            <Form.Group controlId="formCounterLabel">
                <Form.Label>Counter Label</Form.Label>
                <Form.Control
                    value={label}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setLabel(event.target.value)
                    }
                />
            </Form.Group>
            <button
                onClick={() =>
                    setCounters([
                        ...counters,
                        <Counter key={label} initialLabel={label}></Counter>
                    ])
                }
            >
                Add Button
            </button>
        </div>
    );
}

export default App;
