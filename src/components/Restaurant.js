import React from "react";
function Restaurant() {
  return (
    <li className="Restaurant">
      <img
        className="RestaurantImage"
        alt=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqE7HLHGWp8ip9cV6zUhwc1nGQXMiBI_mt7M9aBcv_0wCxo-X"
      ></img>
      <div className="RestaurantInfo">
        <h2 className="RestaurantName">Restaurant</h2>
        <p className="RestaurantDescription">Lecker Lecker Lecker</p>
      </div>
    </li>
  );
}
export default Restaurant;
