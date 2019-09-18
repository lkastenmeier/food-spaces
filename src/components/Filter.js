import React from "react";
// import { filters } from "../api/FilterData";

function Filter({ filter, onChange, selectedValue }) {
  return (
    <>
      <select
        className="Filter"
        onChange={event => {
          onChange(filter.title, event.target.value);
        }}
        value={selectedValue}
      >
        <option value="0">{filter.title}</option>

        {filter.options.map(option => {
          // const selected = option === { selectedValue };
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Filter;
