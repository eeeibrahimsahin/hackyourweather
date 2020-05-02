import React from "react";
export default function Input({ submit, change, value, isDisable }) {
    return (
        <div className="input-group input-group-lg justify-content-center mb-3 display-4 ">
            <form className="d-flex " onSubmit={submit}>
                <div className="input-group-prepend">
                    <span
                        className="input-group-text"
                        id="inputGroup-sizing-2x"
                    >
                        <i className="fas fa-search"></i>
                    </span>
                </div>
                <input
                    className="form-control"
                    type="text"
                    onChange={change}
                    value={value}
                    placeholder="Enter a city name"
                />
                <button
                    className="btn btn-outline-secondary bg-light"
                    type="submit"
                    value="Submit"
                    disabled={isDisable}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
