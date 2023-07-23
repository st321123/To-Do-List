import React, { useState } from "react";
function InputArea(props) {

    const [state, setState] = useState('');
    function handleChange(event) {
        const newValue = event.target.value;
        setState(newValue);
    }
    return (
        <div className="form">
            <input type="text" placeholder="Type here" onChange={handleChange} value={state} />
            <button onClick={() => {
                props.onAdd(state);
                setState("")
            }
            }>
                <span>Add</span>
            </button >
        </div>)

}
export default InputArea;