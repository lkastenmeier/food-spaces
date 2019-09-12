import React from "react";
import Filter from "./Filter";
import { filters } from "../api/FilterData";
function FilterList() {
  return (
    <section className="FilterList">
      {filters.map(filter => {
        return <Filter key={filter.title} filter={filter} />;
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
