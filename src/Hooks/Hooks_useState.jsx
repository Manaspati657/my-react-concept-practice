import { useState } from "react";

export default function Hooks_useState() {
  const [h1Color, setH1Color] = useState("red");

  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "Red",
  });

  const updateColor = () => {
    setCar((prevData) => {
      return {
        ...prevData,
        color: "Blue",
      };
    });
  };

  return (
    <>
      <h1>useState hooks</h1>
      <h1 style={{ color: h1Color }}>Hooks current color : {h1Color}</h1>
      <button
        className="btn btn-primary m-3"
        onClick={(event) => setH1Color("blue")}
      >
        Blue
      </button>
      <button
        className="btn btn-primary m-3"
        onClick={(event) => setH1Color("red")}
      >
        red
      </button>
      <button
        className="btn btn-primary m-3"
        onClick={(event) => setH1Color("orange")}
      >
        orange
      </button>
      <button
        className="btn btn-primary m-3"
        onClick={(event) => setH1Color("black")}
      >
        black
      </button>
      <button
        className="btn btn-primary m-3"
        onClick={(event) => setH1Color("pink")}
      >
        pink
      </button>

      <h2>Car info</h2>
      <ul>
        <li>Brand : {car.brand}</li>
        <li>Model : {car.model}</li>
        <li>Year : {car.year}</li>
        <li>Color : {car.color}</li>
      </ul>

      <button className="btn btn-primary" onClick={updateColor}> update Color</button>
    </>
  );
}
