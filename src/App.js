import React from "react";

import "./App.css";
import RestaurantList from "./components/RestaurantList";
import FilterList from "./components/FilterList";
import Header from "./components/Header";

function App() {
  const [filter, setFilter] = React.useState(null);
  function handleFilterChange(title, option) {
    console.log(`${title}, ${option}`);
    const newFilter = {
      title: title,
      value: option
    };
    setFilter(newFilter);
  }
  return (
    <div className="App">
      <Header />
      <main>
        <FilterList onFilterChange={handleFilterChange} />
        <RestaurantList selectedFilter={filter} />
      </main>
    </div>
  );
}

export default App;
