import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Pic from "./Pic";
import styled from 'styled-components'

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

function App() {
  const [pic, setPic] = useState([]);
  const [date, setDate] = useState([]);
  const [explanation, setExplanation] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=OPfamgCyYwhJvre3PNrqYoTF4OdMQEPSYJ2XNNTg&date=1998-10-11"
      )
      .then((response) => {
        console.log(pic);
        setDate(response.data.date);
        setTitle(response.data.title);
        setPic(response.data.url);
        setExplanation(response.data.explanation);
      })
      .catch((error) => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <section className="App">
      <div className="App-logo"></div>
      <div className="App-header">
        NASA Photo of the Day
        <div className="App-link"><StyledButton>Styled</StyledButton></div>
        <div className="outerEyeOpen"> {title} </div>
        <img src={pic} alt="NPOD" />
        <div className="date"> {date}</div>
        <div className="NPOD"></div>
        <article className="explanation">{explanation}</article>
      </div>
      <div className="outerEyeClose"></div>
    </section>
  );
}

export default App;
