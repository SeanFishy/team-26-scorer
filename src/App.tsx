import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./App.css";
import { Counter } from "./Counter";

function App(): JSX.Element {
    const [counters, setCounters] = useState<JSX.Element[]>([
        <Counter key="initial" initialLabel="Initial Counter"></Counter>
    ]);
    const [label, setLabel] = useState<string>("");
    const [numButtons, setNumButtons] = useState<number>(1);
    return (
        <div className="App">
            <header className="App-header">
                Hello and Welcome to the CISC275 Counters website where you can
                add and utilize multiple different counters
            </header>
            <h3>Have Fun!</h3>
            <div className="flexbox-container">
                {counters.map((curr: JSX.Element): JSX.Element => curr)}
            </div>
            <div className="flex-item-inputs">
                <Form.Group
                    controlId="formCounterLabel"
                    style={{ width: "800px" }}
                >
                    <Form.Label style={{ fontSize: "25px" }}>
                        Add Counter Label
                    </Form.Label>
                    <Form.Control
                        value={label}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setLabel(event.target.value)}
                    />
                </Form.Group>
                <Button
                    style={{ width: "200px" }}
                    onClick={() => {
                        setCounters([
                            ...counters,
                            <Counter
                                key={numButtons}
                                initialLabel={label}
                            ></Counter>
                        ]);
                        setNumButtons(numButtons + 1);
                    }}
                >
                    Add Button
                </Button>
            </div>
        </div>
    );
}

export default App;
