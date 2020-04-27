import React from "react";
export default function Cities({
    name,
    weather: [{ main: weatherMain, description: weatherDescription }],
    main: { temp_min: minTemp, temp_max: maxTemp },
    coord: { lon: longitude, lat: latitude },
    deleteCity,
    bgColor,
}) {
    const cardClass = `card text-white mx-auto mb-3 ${bgColor}`;

    return (
        <div className={cardClass} style={{ width: "18rem" }}>
            <div className="card-header d-flex justify-content-between align-items-center">
                <h1 className="card-title">{name}</h1>
                <i onClick={deleteCity} className="far fa-trash-alt fa-lg"></i>
            </div>
            <div className="card-body">
                <div className="card-title mb-2">
                    <h2>{weatherMain}</h2>
                    <h5>{weatherDescription}</h5>
                </div>
                <hr />
                <p>min temp: {minTemp}</p>
                <p>max temp: {maxTemp}</p>
                <p>
                    location: {longitude}, {latitude}
                </p>
            </div>
        </div>
    );
}
