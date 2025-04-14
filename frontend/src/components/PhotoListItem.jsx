import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ id, imageSource, username, location, profile }) => {
  return (
    <div className="photo-list__item" key={id}>
      <img
        className="photo-list__image"
        src={imageSource}
        alt={`Photo by ${username}`}
      />
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
