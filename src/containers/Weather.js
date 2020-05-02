import React, { useState } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import CityList from "../components/CityList/CityList";
import useSearchHook from "../utils/useSearchHook";
import MyModal from "../components/Modal/Modal";
import Spinner from "../components/Spinner/Spinner";
const Weather = ({ history }) => {
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState([""]);
    const [result, setResult, loading, setLoading] = useSearchHook(
        query[0],
        "weather"
    );
    const [colors, setColors] = useState([]);
    const [isAlreadySearched, setIsAlreadySearched] = useState(false);
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
        setIsAlreadySearched(false);
        if (!query.includes(search)) {
            setQuery([search, ...query]);
        } else {
            setLoading(null);
            setIsAlreadySearched((old) => !old);
        }
        setSearch("");
        let colorIndex = Math.floor(Math.random() * bgColors.length);
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
    const forecastHandler = (cityName) => {
        history.push(`/${cityName}`);
    };
    const cityList = (
        <CityList
            data={result}
            deleteHandler={deleteHandler}
            bgColors={colors}
            forecast={forecastHandler}
        />
    );

    return (
        <div>
            <Cockpit
                submit={submitHandler}
                change={changeHandler}
                value={search}
                isDisable={!search}
            />
            {loading === false ? null : loading === null ? (
                <>
                    <MyModal isAlreadySearched={isAlreadySearched} />
                    {cityList}
                </>
            ) : result.length < 1 ? (
                <Spinner />
            ) : (
                cityList
            )}
        </div>
    );
};

export default Weather;
