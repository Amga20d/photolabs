import React from "react";
import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({
  photos,
  topics,
  favouritePhotoIds,
  toggleFavourite,
  setSelectedPhoto
}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favouritePhotoIds={favouritePhotoIds} />
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
