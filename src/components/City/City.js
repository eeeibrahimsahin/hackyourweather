import React from "react";
import Button from "../Button/Button";
export default function Cities({
    name,
    weather: [{ main: weatherMain, description: weatherDescription, icon }],
    main: { temp_min: minTemp, temp_max: maxTemp },
    sys: { country },
    coord: { lon: longitude, lat: latitude },
    deleteCity,
    bgColor,
    forecast,
}) {
    let cardClass = `card text-white mx-auto mb-3 ${bgColor}`;
    if (bgColor === "bg-light")
        cardClass = `card text-black mx-auto mb-3 ${bgColor}`;
    return (
        <div className={cardClass} style={{ width: "18rem" }}>
            <div className="card-header d-flex justify-content-between align-items-center">
                <h1 className="card-title">{name}</h1>
                <i onClick={deleteCity} className="far fa-trash-alt fa-lg"></i>
            </div>
            <div className="card-body">
                <div className="card-title mb-2 d-flex justify-content-between align-items-center">
                    <div
                        style={{
                            maxWidth: "72%",
                        }}
                    >
                        <h2>{weatherMain}</h2> <h5>{weatherDescription}</h5>
                    </div>
                    <img
                        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                        alt="weather-icon"
                    />
                </div>
                <hr />
                <p>min temp: {minTemp} &deg;C</p>
                <p>max temp: {maxTemp} &deg;C</p>
                <p>
                    location: {longitude}, {latitude}
                </p>
                <div className="d-flex justify-content-between align-items-center ">
                    <Button onClick={forecast} btnName="5 days forecast" />

                    <img
                        src={`https://www.countryflags.io/${country}/shiny/64.png`}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
