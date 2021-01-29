import { useState } from 'react';

export default function Form(props) {
    const [input, setInput] = useState("")
    return (
        <>
            <input
                name="Text Box"
                type="text"
                placeholder="Add Items Here"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button onClick={() => props.add(input)}>Add Item</button>
            <button>Clear Completed</button>
        </>
    )
}