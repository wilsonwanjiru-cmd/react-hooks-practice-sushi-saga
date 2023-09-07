import React, { useState } from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ sushiData, currentIndex, setCurrentIndex, budget, setBudget }) {
  const sushiToDisplay = sushiData.slice(currentIndex, currentIndex + 4);

  // Callback to handle eating sushi
  const eatSushi = (sushi) => {
    if (!sushi.eaten && sushi.price <= budget) {
      sushi.eaten = true;
      setBudget((prevBudget) => prevBudget - sushi.price);
    }
  };

  return (
    <div className="belt">
      {sushiToDisplay.map((sushi) => (
        <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi} />
      ))}
      <MoreButton onClick={() => setCurrentIndex((prevIndex) => prevIndex + 4)} />
    </div>
  );
}

export default SushiContainer;

