import React from "react";
function Restaurant(props) {
  return (
    <article className="Restaurant">
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

        <div className="RestaurantCategories">
          {props.restaurant.categories.map(element => {
            return (
              <p className="RestaurantCategory" key={props.restaurant.title}>
                {element}
              </p>
            );
          })}
        </div>
        <div className="RestaurantInfo">
          <p className="RestaurantDescription" key={props.restaurant.title}>
            {props.restaurant.description}
          </p>
          <p className="RestaurantDescription" key={props.restaurant.title}>
            Distance: {props.restaurant.distance} minute(s)
          </p>
          <p className="RestaurantDescription" key={props.restaurant.title}>
            Rating:
            {props.restaurant.rating} stars
          </p>
        </div>
      </div>
    </article>
  );
}
export default Restaurant;
