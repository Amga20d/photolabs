import React from "react";
import "../styles/HomeRoute.scss";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = ({ photos, topics, favouritePhotoIds, toggleFavourite }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favouritePhotoIds={favouritePhotoIds} />
      <PhotoList 
      photos={photos}
      favouritePhotoIds={favouritePhotoIds}
      toggleFavourite={toggleFavourite} 
      />
    </div>
  );
};

export default HomeRoute;
