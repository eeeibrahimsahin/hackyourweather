import React from "react";
import "./Input.css";
export default function Input(props) {
    return (
        <form className="Input" onSubmit={props.submit}>
            <input type="text" onChange={props.change} />
            <button type="submit" value="Submit">
                Submit
            </button>
        </form>
    );
}
