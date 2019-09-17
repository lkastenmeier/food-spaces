import React from "react";
import Restaurant from "./Restaurant";
import { restaurants } from "../api/RestaurantData";
function RestaurantList(props) {
  const filteredRestaurants = restaurants.filter(restaurant => {
    if (!props.selectedFilter) {
      return true;
    }
    if (props.selectedFilter.title === "Distance") {
      let numbers = props.selectedFilter.value.match(/\d+/g).map(Number);
      return restaurant.distance <= numbers;
      // switch (props.selectedFilter.value) {
      //   case "< 2mins":
      //     return restaurant.distance < 2;
      //   case "< 5mins":
      //     return restaurant.distance < 5;
      //   case "< 10mins":
      //     return restaurant.distance < 10;
      //   case "< 15mins":
      //     return restaurant.distance < 15;
      //   case "< 20mins":
      //     return restaurant.distance < 20;
      //   default:
      //     break;
      // }
    }
    if (props.selectedFilter.title === "Price") {
      // switch (props.selectedFilter.value) {
      // case props.selectedFilter.value:
      return restaurant.price <= props.selectedFilter.value.length;
      // case "$$":
      //   return restaurant.price < 2;
      // case "$$$":
      //   return restaurant.price < 3;
      // case "$$$$":
      //   return restaurant.price < 4;
      // case "$$$$$":
      //   return restaurant.price < 5;
      // default:
      //   break;
    }

    if (props.selectedFilter.title === "Type") {
      return restaurant.categories.includes(props.selectedFilter.value);
    }
    return true;
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

// could also be written with destructuring:
//
// function RestaurantList({selectedFilter}) {
// console.log(selectedFilter);
//   const filteredRestaurants = restaurants.filter(restaurant => {
//     return restaurant.distance > 3;
//   });
//   return (
//     <section className="RestaurantList">
//       {filteredRestaurants.map(restaurant => {
//         return <Restaurant key={restaurant.description} restaurant={restaurant} />;
//       })}
//     </section>
//   );
// }
