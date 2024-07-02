import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { Button, Input, Popover, ComboBox } from "react-aria-components";
import { ListBoxItemProps } from "react-aria-components";
import CountryList from "./CountryList";
import Info from './InfoPage';
//import  '/src/client/styles.css'


const MainContainer = ({ countryVal, setCountryVal }) => {

  const inputChange = (event) => {
    setCountryVal(event.target.value)
  }

  return (
    <>
      <div style={{ padding: "20px", display: "flex", justifyContent: "center", alignItems: "center", height: "20vh" }}>
        <Subtitle />
      </div>
      <div style={{ padding: "20px", height: "20vh" }}>
        <Country countryVal={countryVal} inputChange={inputChange} />
      </div>
      <div style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
        <Submit />
      </div>
    </>
  );
};

const Subtitle = () => {
  return (
    <h2 style={{ display: "flex", color: "black", fontFamily: "Playwrite DE Grund", fontWeight: 100, fontSize: "40px" }}>
      Where's Your Next Adventure?
    </h2>
  );
};

const Country = ({countryVal, inputChange}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "50px" }}>
      <ComboBox style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
        <div>
          <Input style={{ height: "50px", width: "400px" }} value={countryVal} onChange={inputChange}/>
          <Button style={{ height: "50px", width: "50px" }}>▼</Button>
        </div>
        <Popover>
          <CountryList />
        </Popover>
      </ComboBox>
    </div>
  );
};

const Submit = ({ }) => {
  return (
    <Button
      className="submit-button"
      style={{
        fontFamily: "Playwrite DE Grund",
        color: "black",
        height: 50,
        width: 180,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Let's Go!
    </Button>
  );
};

export default MainContainer;
