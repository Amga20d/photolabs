import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, favouritePhotoIds, toggleFavourite, setSelectedPhoto }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem
            id={photo.id}
            imageSource={photo.urls.regular}
            username={photo.user.username}
            location={`${photo.location.city}, ${photo.location.country}`}
            profile={photo.user.profile}
            isLiked={favouritePhotoIds.includes(photo.id)}
            toggleFavourite={toggleFavourite}
            setSelectedPhoto={setSelectedPhoto}
            photoData={photo} // full object
          />
        </li>
      ))}
    </ul>
  );
};
export default PhotoList;
