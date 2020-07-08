import React from "react";
import recipes from "../Images/recipess.png";
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
          </div>
          
      </div>
  )
}


export default Body;
