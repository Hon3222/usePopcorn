import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App2 from "./App-V1";
/*
import StarRating from "./StarRating";
/*
function Test() {
  const [movieStars, setMovieStars] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={"jdcb"} onSetRating={setMovieStars} />
      <p>This Movie was ratied {movieStars} stars</p>
    </div>
  );
}
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);
/*
<StarRating maxRating={10} />
    <StarRating
      maxRating={5}
      messages={["Terrabile", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={5} color="red" size="24" defaultRating={3} />
    <Test />
*/
