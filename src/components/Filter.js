import React from "react";

function Filter(props) {
  return (
    <select className="Filter">
      {props.filter.options.map(element => {
        return <option key={element}>{element}</option>;
      })}
    </select>
  );
}

export default Filter;
