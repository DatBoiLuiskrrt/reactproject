import React from 'react';
import Header from "../src/components/Header";
import Body from "../src/components/Body";
import Typical from "react-typical";

function App() {
  return (
    <div>
      <Header/>
      <h1>hello </h1>
      <p>Soy Luis y soy{' '}
        <Typical
        loop={Infinity}
        wrapper="b"
        steps={[
          'Developer 💻 ',
          1000,
          " un Crack 💊",
          1000,
        ]}
        />
      </p>
      <Body/>
    </div>
  );
}

export default App;
