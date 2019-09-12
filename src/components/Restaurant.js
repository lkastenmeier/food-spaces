import React from "react";
function Restaurant(props) {
  return (
    <li className="Restaurant">
      <div className="ImgContainer">
        <img
          className="RestaurantImage"
          alt=""
          src={props.restaurant.imgSrc}
        ></img>

        <img
          className="RestaurantImageExtra"
          src={props.restaurant.altimgSrc}
          alt=""
        ></img>
      </div>
      <div className="RestaurantInfo">
        <h2 className="RestaurantName">{props.restaurant.title}</h2>
        <p className="RestaurantDescription">Lecker Lecker Lecker</p>
      </div>
    </li>
  );
}
export default Restaurant;
