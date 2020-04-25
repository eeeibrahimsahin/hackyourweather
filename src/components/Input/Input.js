import React from "react";
import "./Input.css";
export default function Input({ submit, change, value, isDisable }) {
    return (
        <form className="Input" onSubmit={submit}>
            <input type="text" onChange={change} value={value} />
            <button type="submit" value="Submit" disabled={isDisable}>
                Submit
            </button>
        </form>
    );
}
