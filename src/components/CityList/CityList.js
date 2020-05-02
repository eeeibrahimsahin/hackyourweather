import React from "react";
import City from "../City/City";
const CityList = ({ data, bgColors, deleteHandler, forecast }) => {
    return (
        <div className="d-flex justify-content-center flex-wrap">
            {data.map((city, index) => {
                let newIndex = index;
                if (index > bgColors.length) newIndex = index % bgColors.length;
                return (
                    <City
                        bgColor={bgColors[newIndex]}
                        key={city.id}
                        {...city}
                        deleteCity={() => deleteHandler(city.id)}
                        forecast={() => forecast(city.name)}
                    />
                );
            })}
        </div>
    );
};
export default CityList;
