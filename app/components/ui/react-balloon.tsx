/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import {ReactFloatingBalloons} from 'react-floating-balloons'
import "./../../globals.css";

export default function Reactbaloons() {
  const supportsTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;
  const [burstCount, setBurstCount] = useState<number>(0);

  // Increment counter when a balloon is popped
  const handlePop = () => {
    setBurstCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="App">
    
      <ReactFloatingBalloons
        count={10} // Total number of balloons
        msgText="Boom!!" // Message to show when popped
        colors={["yellow", "purple"]} // Colors of the balloons
        popVolumeLevel={0.1} // Volume level of the popping sound
        onPop={handlePop} // Called whenever a balloon is popped
      />
    </div>
  );
}
