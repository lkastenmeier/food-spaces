import React from "react";
import Restaurant from "./Restaurant";
import { restaurants } from "../api/RestaurantData";
function RestaurantList() {
  return (
    <section className="RestaurantList">
      {restaurants.map(restaurant => {
        return <Restaurant key={restaurant.title} restaurant={restaurant} />;
      })}
    </section>
  );
}
export default RestaurantList;
