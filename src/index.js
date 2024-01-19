import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// const myArray = ["car", "bus", "truck"];

// const myList = myArray.map((element) => <h3>{element}</h3>);

// const myFirstElement = <h1>Hello world</h1>;

// const myTable = (
//   <table>
//     <tbody>
//       <tr>
//         <th>Name</th>
//       </tr>
//       <tr>
//         <td>John</td>
//       </tr>
//       <tr>
//         <td>elesha</td>
//       </tr>
//     </tbody>
//   </table>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(myTable);

// root.render(myFirstElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);