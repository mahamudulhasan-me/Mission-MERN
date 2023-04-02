import React from "react";
import Header from "./components/Header/Header";
import MarkChart from "./components/MarkChart/MarkChart";
import PriceContainer from "./components/PriceContainer/PriceContainer";

const App = () => {
  return (
    <div>
      <Header />
      <PriceContainer />
      <MarkChart />
    </div>
  );
};

export default App;
