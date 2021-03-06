import React from "react";
import Filter from "./Filter";
import { filters } from "../api/FilterData";
// import { tsPropertySignature } from "@babel/types";
function FilterList({ onFilterChange, selectedFilters }) {
  return (
    <section className="FilterList">
      {filters.map(filter => {
        return (
          <Filter
            key={filter.title}
            filter={filter}
            onChange={onFilterChange}
            selectedValue={selectedFilters[filter.title]}
          />
        );
      })}
    </section>
  );
}

// function FilterList() {
//   return (
//     <div className="FilterList">
//       <Filter />
//       <Filter />
//       <Filter />
//       <button className="Button">New Space</button>
//     </div>
//   );
// }
export default FilterList;
