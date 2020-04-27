import React from "react";
import Input from "../Input/Input";
import Header from "../Header/Header";

const Cockpit = ({ submit, change, value, isDisable }) => {
    return (
        <div>
            <Header />
            <Input
                submit={submit}
                change={(e) => change(e.target.value)}
                value={value}
                isDisable={isDisable}
            />
        </div>
    );
};
export default Cockpit;
