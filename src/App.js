import React from "react";

import "./App.css";
import RestaurantList from "./components/RestaurantList";
import FilterList from "./components/FilterList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <FilterList />
        <RestaurantList />
      </main>
    </div>
  );
}

export default App;
