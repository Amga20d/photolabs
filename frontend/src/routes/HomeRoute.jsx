import React from "react";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  photos,
  topics,
  favouritePhotoIds,
  toggleFavourite,
  setSelectedPhoto,
  fetchPhotosByTopic,
}) => {
  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favouritePhotoIds={favouritePhotoIds}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      <PhotoList
        photos={photos}
        favouritePhotoIds={favouritePhotoIds}
        toggleFavourite={toggleFavourite}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
};

export default HomeRoute;
