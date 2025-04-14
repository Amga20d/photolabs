import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  id,
  imageSource,
  username,
  location,
  profile,
  isLiked,
  toggleFavourite,
}) => {
  return (
    <div className="photo-list__item">
      <div style={{ position: "relative" }}>
        <img
          className="photo-list__image"
          src={imageSource}
          alt={`Photo by ${username}`}
        />
        <div style={{ position: "absolute", top: 8, right: 8 }}>
          <PhotoFavButton
            selected={isLiked}
            onClick={() => toggleFavourite(id)}
          />
        </div>
      </div>

      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt={`${username}'s profile`}
        />
        <div className="photo-list__user-info">
          <div>@{username}</div>
          <div className="photo-list__user-location">{location}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
