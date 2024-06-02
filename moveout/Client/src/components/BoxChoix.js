import React, { useState } from "react";

function BoxChoix() {
  //maximum prix à choisir
  const [MaximumPrix, setMaximumPrix] = useState();
  //minimum prix à choisir
  const [MiniimumPrix, setMinimumPrix] = useState();
  //maximum bedroom à choisir
  const [Maximumbedroom, setMaximumBedroom] = useState();
    // State to handle the range input value
    const [rangeValue, setRangeValue] = useState(40);

  return (
    
    <div className="p-4">
    <input
      type="range"
      min="0"
      max="3000"
      value={rangeValue}
      className="range w-full"
      onChange={(e) => setRangeValue(e.target.value)}
    />
    <div className="mt-2">
      Value: {rangeValue}
    </div>
  </div>
   
  );
}

export default BoxChoix;
