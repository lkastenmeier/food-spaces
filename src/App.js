import React from "react";

import "./App.css";
import RestaurantList from "./components/RestaurantList";
import FilterList from "./components/FilterList";
import Header from "./components/Header";

function App() {
  function handleFilterChange(title, option) {
    console.log(`${title}, ${option}`);
  }
  return (
    <div className="App">
      <Header />
      <main>
        <FilterList onFilterChange={handleFilterChange} />
        <RestaurantList />
      </main>
    </div>
  );
}

export default App;
