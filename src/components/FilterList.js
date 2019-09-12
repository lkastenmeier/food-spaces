import React from "react";
import Filter from "./Filter";
function FilterList() {
  return (
    <div className="FilterList">
      <Filter />
      <Filter />
      <Filter />
      <button className="Button">New Space</button>
    </div>
  );
}
export default FilterList;
