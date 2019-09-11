import React from "react";
function Restaurant() {
  return (
    <li className="Restaurant">
      <div className="ImgContainer">
        <img
          className="RestaurantImage"
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqE7HLHGWp8ip9cV6zUhwc1nGQXMiBI_mt7M9aBcv_0wCxo-X"
        ></img>
        <img
          className="RestaurantImageExtra"
          alt=""
          src="https://cdn-img.scalabs.com.au/4ScpHerKANCBjR1XtpP5nyHOwpaNsu1WIm4FLDw5ovQ/aHR0cHM6Ly9zdy1o/aXQtcHJkLnNjYWRp/Z2l0YWwuaW8vbWVk/aWEvMzg3ODAvY2Fy/dG9vbi1mb29kLnBu/Zz9wcmVzZXQ9TWFp/bkltYWdl"
        ></img>
      </div>
      <div className="RestaurantInfo">
        <h2 className="RestaurantName">Restaurant</h2>
        <p className="RestaurantDescription">Lecker Lecker Lecker</p>
      </div>
    </li>
  );
}
export default Restaurant;
