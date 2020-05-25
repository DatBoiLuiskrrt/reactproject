import React from 'react';
import Header from "../src/components/Header";
import Body from "../src/components/Body";
import Typical from "react-typical";
import { StylesProvider } from '@material-ui/core';
import Styles from "./components/Image.module.css";

function App() {
  return (
    <div>
      <Header/>
      <div className={Styles.body}>
        <span>
      <h1>My name is Luis</h1> 
      
      <p>and I am a {" "}
        <Typical
        loop={Infinity}
        wrapper="b"
        steps={[
          'Developer 💻 ',
          1000,
          "Fast learner ⚡💡",
          1000,
          "Code Wizard 🧙‍♂️",
          1000,
          "Cat owner 🐈🐱‍👤"
        ]}
        />
        </p>
        </span>
        
      
      </div>
      <Body/>
      </div>
  );
}

export default App;
