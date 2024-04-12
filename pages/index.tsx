"use client";

import { useMemo, useState } from "react"

type NameAndNumberProps = {
    name: string
}

const NameAndNumber = ({ name }: NameAndNumberProps) => {
    const number = useMemo(() => Math.random().toFixed(3), []);

    return `${name} (${number}), `;
}

const Demo = () => {

    const [people, setPeople] = useState(['Bri', 'Mil', 'Laq', 'Sha', 'Mar']);

    const randomizeOrder = () => {
        setPeople([...people.sort(() => Math.random() - 0.5)]);
    }

    return (
        <div style={{fontFamily: 'monospace'}}>
            <div>Key of index</div>
            <div>{people.map((person, i) => (<NameAndNumber key={i} name={person} />))}</div>

            <div>Key of locally unique name</div>
            <div>{people.map((person) => (<NameAndNumber key={person} name={person} />))}</div>

            <button onClick={randomizeOrder}>Randomize order</button>
        </div>
    );
}

export default Demo