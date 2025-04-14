import { useState } from "react";
import photos from "../mocks/photos";
import topics from "../mocks/topics";

const useApplicationData = () => {
  const [favouritePhotoIds, setFavouritePhotoIds] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const updateToFavPhotoIds = (photoId) => {
    setFavouritePhotoIds((prev) =>
      prev.includes(photoId)
        ? prev.filter((id) => id !== photoId)
        : [...prev, photoId]
    );
  };

  const onClosePhotoDetailsModal = () => setSelectedPhoto(null);

  return {
    state: {
      favouritePhotoIds,
      selectedPhoto,
      photos,
      topics
    },
    updateToFavPhotoIds,
    setPhotoSelected: setSelectedPhoto,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;
