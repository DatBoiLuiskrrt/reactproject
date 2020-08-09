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
          <button>I'm a button</button> { ' '}
          <button>I'm another button</button>
          </div>
          <div>
              <h1>COVID-19 Tracker</h1>
              <img src={covid}
                   alt="covid screenshot"
                   width= "400px">

                </img>
                <p>Es irrt der Mensch, wenn er sie beim Kragen hätte. Ich höre schon des Dorfs Getümmel, Hier ist des Volkes wahrer Himmel, Zufrieden jauchzet groß und klein, Hier bin ich nicht; doch viel ist mir bewusst. Ich bin von je der Ordnung Freund gewesen. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens goldner Baum. So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächt'ger Schnelle Vom Himmel durch die Welt zur Hölle. Es irrt der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächtger Schnelle Vom Himmel durch die Welt zur Hölle. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Gewöhnlich glaubt der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. Gewöhnlich glaubt der Mensch, wenn er sie beim Kragen hätte. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens goldner Baum.
          </p>
          <button>I'm a button</button>{' '}
          <button>I'm another button</button>

          </div>
        <div className="footer">
            
        </div>
          
      </div>
      
  )
}


export default Body;
