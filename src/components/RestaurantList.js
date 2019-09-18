import React from "react";
import Restaurant from "./Restaurant";
import { restaurants } from "../api/RestaurantData";
function RestaurantList({ selectedFilters }) {
  console.log(selectedFilters);

  const filteredRestaurants = restaurants.filter(restaurant => {
    let restaurantSelection = true;
    if (selectedFilters.Distance) {
      //below: extracts the number from the string
      let numbers = selectedFilters.Distance.match(/\d+/g).map(Number);
      console.log(numbers);
      restaurantSelection = restaurant.distance <= numbers;
    }
    if (restaurantSelection && selectedFilters.Price) {
      //below: compares string length(!)
      restaurantSelection = restaurant.price <= selectedFilters.Price.length;
    }

    if (restaurantSelection && selectedFilters.Type) {
      restaurantSelection = restaurant.categories.includes(
        selectedFilters.Type
      );
    }
    return restaurantSelection;

    // could also be written with destructuring:
    // function RestaurantList({selectedFilters}) {
    // console.log(selectedFilters);
    //   const filteredRestaurants = restaurants.filter(restaurant => {
    //     return restaurant.distance > 3;
  });
  return (
    <section className="RestaurantList">
      {filteredRestaurants.map(restaurant => {
        return (
          <Restaurant key={restaurant.description} restaurant={restaurant} />
        );
      })}
    </section>
  );
}
export default RestaurantList;
