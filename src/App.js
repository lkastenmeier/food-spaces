import React from "react";

import "./App.css";
import RestaurantList from "./components/RestaurantList";
import FilterList from "./components/FilterList";
import Header from "./components/Header";

// const filters = {
//   Distance: null,
//   Category: null,
//   Price: null
// };
// above: also possible as an array

function App() {
  const [filters, setFilters] = React.useState({
    Distance: "< 10mins",
    Price: "$$$",
    Type: "wraps"
  });
  function handleFilterChange(title, option) {
    const newFilters = { ...filters };
    newFilters[title] = option;
    setFilters(newFilters);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <FilterList
          selectedFilters={filters}
          onFilterChange={handleFilterChange}
        />
        <RestaurantList selectedFilters={filters} />
      </main>
    </div>
  );
}

export default App;
