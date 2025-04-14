import React from "react";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = () => {
  const handleClick = (event) => {
    const heartIcon = event.currentTarget.querySelector("i");
    heartIcon.classList.toggle("photo-list__fav-icon-svg"); // toggles active style
    console.log("Favourite toggled!");
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <i className="photo-list__fav-icon-svg" />
    </div>
  );
};

export default PhotoFavButton;
