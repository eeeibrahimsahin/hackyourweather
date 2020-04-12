import React from "react";
import "./City.css";
export default function Cities(props) {
    let data = props.data;
    return (
        <div className="City">
            <h1>{data.name}</h1>
            <div className="Weather">
                <h2>{data.weatherMain}</h2>
                <h5>{data.weatherDescription}</h5>
            </div>
            <div>
                <p>min temp: {data.minTemp}</p>
                <p>max temp: {data.maxTemp}</p>
                <p>
                    location: {data.longitude},{data.latitude}
                </p>
            </div>
        </div>
    );
}
