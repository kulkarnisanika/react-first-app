import React from "react";
import ReactDOM from "react-dom/client";

//XML
// XML => createElement() => JS Object => HTML element (by render)
const heading = <h1> This is from XML.</h1>;

//Functional Component
const Title = () => (
    <h1> Hello Functional Componnets!!</h1>
);

//Component Composition 
const TitleAdoption= () =>{
    return (
        <div className = "container">
            <Title />
            <div id= "paragraphStyle" >
                <p>This is Functional Component which uses another component. Hence it is component composition</p>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("main"));

root.render(<TitleAdoption />);



