import React from "react";
import useSearchHook from "../utils/useSearchHook";
import Chart from "../components/Chart/Chart";
import Button from "../components/Button/Button";
import Spinner from "../components/Spinner/Spinner";

export default function Forecast({ history, match }) {
    const [result] = useSearchHook(`${match.params.id}`, "forecast");

    let data;
    if (result.length > 0) {
        var {
            city: { country: countryOfCity, name: cityName },
        } = result[0];

        data = result[0].list.map((e) => {
            return {
                name: e.dt_txt,
                temp: e.main["temp"],
            };
        });
    }

    const backToPreviousPageHandler = () => {
        history.goBack();
    };
    return result.length > 0 ? (
        <div
            className=" d-flex flex-column justify-content-center align-items-center pt-5 bg-light"
            style={{ height: "100vh" }}
        >
            <h1>
                <span className="badge badge-secondary">5 days forecast</span>
            </h1>
            <h2>
                {cityName},{countryOfCity}
            </h2>
            <Chart data={data} />
            <div className="mt-2">
                <Button
                    btnName="Back to previous page"
                    onClick={backToPreviousPageHandler}
                />
            </div>
        </div>
    ) : (
        <Spinner />
    );
}
