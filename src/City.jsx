import React from "react";

const City = ({ city }) => {
  return (
    <div>
      <div>
        <h1 className="text-5xl">Sıcaklık: {city?.main?.temp}</h1>
        <h1 className="text-3xl">Şehir: {city?.name}</h1>
        <h1 className="text-2xl">
          Hava: {city?.weather.length > 0 && city.weather[0].main}
        </h1>
      </div>
    </div>
  );
};

export default City;
