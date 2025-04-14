import React, { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = () => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    console.log("Favourite toggled!");
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <FavIcon selected={selected} />
    </div>
  );
};

export default PhotoFavButton;
