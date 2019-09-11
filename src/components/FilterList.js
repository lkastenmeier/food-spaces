import React from "react";
import Filter from "./Filter";
function FilterList() {
  return (
    <div className="FilterList">
      <Filter />
      <Filter />
      <Filter />
      <button className="Button">+</button>
    </div>
  );
}
export default FilterList;
