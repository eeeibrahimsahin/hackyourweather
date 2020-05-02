import React from "react";

export default function Button({ btnName, onClick }) {
    return (
        <button
            type="button"
            className="btn btn-outline-dark"
            onClick={onClick}
        >
            {btnName}
        </button>
    );
}
