import React from 'react';
import Header from "../src/components/Header";
import Body from "../src/components/Body";
import Typical from "react-typical";
import Styles from "./components/Image.module.css";
import Intro from "../src/components/Intro";
import Projects from "../src/components/Projects";

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
      <Intro/>
      <Projects/>
      </div>
  );
}

export default App;
