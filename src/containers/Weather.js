import React, { useState } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import CityList from "../components/CityList/CityList";
import useSearchHook from "../utils/useSearchHook";
import MyModal from "../components/Modal/Modal";
const Weather = () => {
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");
    const [result, setResult, loading, setLoading] = useSearchHook(query);
    const [colors, setColors] = useState([]);
    const bgColors = [
        "bg-primary",
        "bg-secondary",
        "bg-success",
        "bg-danger",
        "bg-warning",
        "bg-info",
        "bg-light",
        "bg-dark",
    ];
    const changeHandler = (inputText) => {
        setSearch(inputText);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
        let colorIndex = Math.floor(Math.random() * bgColors.length);
        console.log(colorIndex);

        setColors([bgColors[colorIndex], ...colors]);
    };
    const deleteHandler = (id) => {
        let newList = result.filter((city) => city.id !== id);
        setResult(newList);
        if (newList.length === 0) {
            setLoading(false);
            window.location.reload();
        }
    };

    return (
        <div>
            <Cockpit
                submit={submitHandler}
                change={changeHandler}
                value={search}
                isDisable={!search}
            />
            {loading === false ? null : loading === null ? (
                <MyModal />
            ) : result.length < 1 ? (
                <h1 className="d-flex justify-content-center text-white">
                    Loading....
                </h1>
            ) : (
                <CityList
                    data={result}
                    deleteHandler={deleteHandler}
                    bgColors={colors}
                />
            )}
        </div>
    );
};

export default Weather;
