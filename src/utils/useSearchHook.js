import { useState, useEffect } from "react";
import axios from "axios";

const useSearchHook = (searchCity) => {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        function fetchCityInfo() {
            setLoading(true);
            setResult([]);
            axios
                .get(
                    `data/2.5/weather?q=${searchCity}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
                )
                .then((response) => {
                    setResult([{ ...response.data }, ...result]);
                })
                .catch((error) => {
                    setLoading(null);
                    setResult([...result]);
                });
        }
        if (searchCity !== "") fetchCityInfo();
    }, [searchCity]);

    return [result, setResult, loading, setLoading];
};
export default useSearchHook;
