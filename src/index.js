// // CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import Cars from "./practice";

const [honda = "Honda Object", tesla = "Tesla Object"] = Cars;
const {
  coloursByPopularity: [hondaTopColour = "4"],
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
