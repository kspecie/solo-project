import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
//import  '/src/client/styles.css'
import plane from "../assets/plane2.png";
import MainContainer from "./MainPage";



const App = () => {
  
  const [countryVal, setCountryVal] = useState('');


  return (
    <>
      <h1>The Wise Wanderer</h1>
      <img id="plane" src={plane} alt="plane-image" height="50px"></img>
      <MainContainer countryVal={countryVal} setCountryVal={setCountryVal} />
      
    </>
  );
};

export default App;
