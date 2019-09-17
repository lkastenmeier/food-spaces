import React from "react";
import Filter from "./Filter";
import { filters } from "../api/FilterData";
// import { tsPropertySignature } from "@babel/types";
function FilterList(props) {
  return (
    <section className="FilterList">
      {filters.map(filter => {
        return (
          <Filter
            key={filter.title}
            filter={filter}
            onChange={props.onFilterChange}
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
