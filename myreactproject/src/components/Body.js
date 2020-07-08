import React from "react";
import recipes from "../Images/recipess.png";
import covid from "../Images/covidOptimized.PNG";
const Body = () => {
  return (
      <div>
          <h1>Projects</h1>
          <div>
          <h2>Recipe App</h2>
          <img  src={recipes}
                alt="recipes screenshot"
                width= "400px">

          </img>
          <p>We will scale up our capacity to harness mega-holistically. We pride ourselves not only on our robust iteration and user-proof configuration is usually considered an amazing achievement. Is it 
          </p>
          </div>
          <div>
              <h1>COVID-19 Tracker</h1>
              <img src={covid}
                   alt="covid screenshot"
                   width= "400px"></img>
          </div>
          
      </div>
  )
}


export default Body;
