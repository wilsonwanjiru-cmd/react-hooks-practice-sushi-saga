import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [budget, setBudget] = useState(100); // Set an initial budget (you can choose your own value)
  const [sushiData, setSushiData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch sushi data from the server
    fetch(API)
      .then((response) => response.json())
      .then((data) => setSushiData(data));
  }, []);

  return (
    <div className="app">
      <SushiContainer
        sushiData={sushiData}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        budget={budget}
        setBudget={setBudget}
      />
      <Table budget={budget} />
    </div>
  );
}

export default App;
