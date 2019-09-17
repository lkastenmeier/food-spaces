import React from "react";
// import { filters } from "../api/FilterData";

function Filter({ filter, onChange }) {
  return (
    <>
      <select
        className="Filter"
        onChange={event => {
          onChange(filter.title, event.target.value);
        }}
      >
        <option value="">{filter.title}</option>
        <option value="">no {filter.title} filter</option>

        {filter.options.map(option => {
          return <option value={option}>{option}</option>;
        })}
      </select>
    </>
  );
}

export default Filter;
