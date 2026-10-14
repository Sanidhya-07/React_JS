import React from "react";

const Weather = ({ temperature }) => {
  if (temperature < 15) {
    return <h1 style={{ color: "blue" }}>it's COLD outside ...!!!</h1>;
  } 
  else if (temperature >= 15 && temperature <= 25) {
    return <h1 style={{ color: "orange" }}>it's NICE outside ...!!!</h1>;
  } 
  else {
    return <h1 style={{ color: "red" }}>it's HOT outside ...!!!</h1>;
  }
};

export default Weather;
