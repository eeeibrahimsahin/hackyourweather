import React, { useState } from "react";
import Input from "../Input/Input";
import City from "../City/City";
import useSearchHook from "../../utils/useSearchHook";

export default function Cockpit() {
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");
    const [result, setResult, loading, setLoading] = useSearchHook(query);
    const deleteHandler = (id) => {
        let newList = result.filter((city) => city.id !== id);
        setResult(newList);
        if (newList.length === 0) {
            setLoading(false);
            window.location.reload();
        }
    };

    const cityList = result.map((city) => {
        return (
            <City
                key={city.id}
                {...city}
                deleteCity={() => deleteHandler(city.id)}
            />
        );
    });
    return (
        <div>
            <h1>Weather</h1>
            <Input
                submit={(e) => {
                    e.preventDefault();
                    setQuery(search);
                    setSearch("");
                }}
                value={search}
                change={(e) => setSearch(e.target.value)}
                isDisable={!search}
            />
            {loading === false ? (
                <h1>Enter a name of city, please!</h1>
            ) : loading === null ? (
                <h1>No City Found</h1>
            ) : result.length < 1 ? (
                <h1>Loading....</h1>
            ) : (
                cityList
            )}
        </div>
    );
}
