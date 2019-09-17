import React from "react";
import { filters } from "../api/FilterData";

function Filter(props) {
  return (
    <>
      <select
        className="Filter"
        onChange={event => {
          props.onChange(props.filter.title, event.target.value);
        }}
      >
        <option>{props.filter.title}</option>
        {props.filter.options.map(option => {
          return <option>{option}</option>;
        })}
      </select>
    </>
  );
}

export default Filter;
