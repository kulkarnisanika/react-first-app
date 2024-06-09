import React from "react";
import ReactDOM from "react-dom/client";

//It will hold all react code

 //create HTML element by React
 const heading = React.createElement("h1", {"id": "heading"} , "Hello React!!!");

 //find element and create it in react
 const findEle = ReactDOM.createRoot(document.getElementById("main"));

 //add created element in created  DOM which was found before step
 findEle.render(heading);