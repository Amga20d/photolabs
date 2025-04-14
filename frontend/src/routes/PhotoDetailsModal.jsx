import React, { useEffect } from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({
  id,
  imageUrl,
  user,
  location,
  similarPhotos,
  setSelectedPhoto
}) => {
  useEffect(() => {
    console.log("Modal opened for photo:", {
      id,
      imageUrl,
      user,
      location,
      similarPhotos
    });
  }, [id, imageUrl, user, location, similarPhotos]);

  const handleClose = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={handleClose}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;
