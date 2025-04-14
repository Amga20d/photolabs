import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ id, imageSource, username, location, profile }) => {
  return (
    <div className="photo-list-item" key={id}>
      <img className="photo-image" src={imageSource} alt={`Photo by ${username}`} />
      <div className="photo-details">
        <div className="user-info">
          <img className="user-profile" src={profile} alt={`${username}'s profile`} />
          <span className="username">@{username}</span>
        </div>
        <div className="location">
          {location}
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
