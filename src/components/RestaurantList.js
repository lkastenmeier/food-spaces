import React from "react";
import Restaurant from "./Restaurant";
import { restaurants } from "../api/RestaurantData";
function RestaurantList(props) {
  console.log(props.selectedFilters);

  const filteredRestaurants = restaurants.filter(restaurant => {
    let restaurantSelection = true;
    if (props.selectedFilters.Distance) {
      //below: extracts the number from the string
      let numbers = props.selectedFilters.Distance.match(/\d+/g).map(Number);
      restaurantSelection = restaurant.distance <= numbers;
    }
    if (restaurantSelection && props.selectedFilters.Price) {
      //below: compares string length(!)
      restaurantSelection =
        restaurant.price <= props.selectedFilters.Price.length;
    }

    if (restaurantSelection && props.selectedFilters.Type) {
      restaurantSelection = restaurant.categories.includes(
        props.selectedFilters.Type
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
