import React, { useState } from "react";
import Time from "./Time";

function App() {
  const collection = [8763466, 8763443][Math.floor(Math.random() * 2)];
  const {
    devicePixelRatio,
    screen: { availHeight, availWidth },
  } = window;
  const imageSize = `${availWidth * devicePixelRatio}x${availHeight *
    devicePixelRatio}`;
  const [backgroundImage, setBackgroundImage] = useState(
    `https://source.unsplash.com/collection/${collection}/${imageSize}`
  );

  return (
    <div
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${backgroundImage})`,
        color: "white",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <Time />
    </div>
  );
}

export default App;
