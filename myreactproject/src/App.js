import React from 'react';
import Header from "../src/components/Header";
import Body from "../src/components/Body";
import Typical from "react-typical";

function App() {
  return (
    <div>
      <Header/>
      <h1>My name is Luis  </h1>
      <p>and I am a{' '}
        <Typical
        loop={Infinity}
        wrapper="b"
        steps={[
          'Developer 💻 ',
          1000,
          " un Crack 💊",
          1000,
          "un Minetito Hermosho 🐈😻",
          1000,
          "el esposho de mi vinetita hermoshaaa 💘"
        ]}
        />
      </p>
      <Body/>
    </div>
  );
}

export default App;
