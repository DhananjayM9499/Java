import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import Person from "./Person/Person";
import Person2 from "./Person/Person2";
import reportWebVitals from "./reportWebVitals";
import Football from "./Football/Football";
import Car from "./Car/Car";
const root = ReactDOM.createRoot(document.getElementById("root"));

// var appContent = (
//   <div>
//     <Person name="Dhananjay" title="Drunk" />
//     <Person name="Rutuja" title="life changer" />
//     <Person name="Life goal" title="paisa" />
//   </div>
// );

// var appContent = (
//   <div>
//     <Person2 name="Dhananjay" hobbies="Drinking" />
//     <Person2 name="Rutuja" hobbies="Dance" />
//     <Person2 name="Life goal" hobbies="Maya" />
//   </div>
// );
// var app = (
//   <div>
//     <br />
//     <Football />
//   </div>
// );
var app = (
  <div>
    <br />
    <Car />
    <br />
    <Car />
  </div>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(appContent);
root.render(app);
