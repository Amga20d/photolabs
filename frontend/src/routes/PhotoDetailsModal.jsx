import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton"; 

const PhotoDetailsModal = ({
  id,
  imageUrl,
  user,
  location,
  similarPhotos,
  setSelectedPhoto,
  favouritePhotoIds,
  toggleFavourite
}) => {
  const handleClose = () => setSelectedPhoto(null);

  const isLiked = favouritePhotoIds.includes(id);

  return (
    <div className="photo-details-modal">
      {/* Close Button */}
      <button
        className="photo-details-modal__close-button"
        onClick={handleClose}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Main Image  */}
      <div className="photo-details-modal__images" style={{ position: "relative" }}>
        
        <div
          style={{
            position: "absolute",
            top: 8,
            left: 8,
            zIndex: 2
          }}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavourite(id);
          }}
        >
          <PhotoFavButton selected={isLiked} />
        </div>

        {/* Main Image */}
        <img
          className="photo-details-modal__image"
          src={imageUrl}
          alt="Selected full-size"
        />

        {/* User Info */}
        <div className="photo-details-modal__top-bar">
          <div className="photo-details-modal__photographer-details">
            <img
              src={user.profile}
              alt={`${user.username}'s profile`}
              className="photo-details-modal__photographer-profile"
            />
            <div className="photo-details-modal__photographer-info">
              <div>@{user.username}</div>
              <div className="photo-details-modal__photographer-location">
                {location.city}, {location.country}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Photos */}
      <div className="photo-details-modal__images">
        <PhotoList
          photos={similarPhotos}
          favouritePhotoIds={favouritePhotoIds}
          toggleFavourite={toggleFavourite}
          setSelectedPhoto={setSelectedPhoto}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
