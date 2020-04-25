import React from "react";
import "./City.css";
export default function Cities({
    name,
    weather: [{ main: weatherMain, description: weatherDescription }],
    main: { temp_min: minTemp, temp_max: maxTemp },
    coord: { lon: longitude, lat: latitude },
    deleteCity,
}) {
    return (
        <div className="City">
            <div className="Header">
                <h1>{name}</h1>{" "}
                <i onClick={deleteCity} className="far fa-trash-alt"></i>
            </div>
            <div className="Weather">
                <h2>{weatherMain}</h2>
                <h5>{weatherDescription}</h5>
            </div>
            <div>
                <p>min temp: {minTemp}</p>
                <p>max temp: {maxTemp}</p>
                <p>
                    location: {longitude},{latitude}
                </p>
            </div>
        </div>
    );
}
