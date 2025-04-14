import React, { useState } from "react";
// import PhotoListItem from './components/PhotoListItem';
// import PhotoList from './components/PhotoList';
// import TopicListItem from './components/TopicListItem';
// import TopicList from './components/TopicList';
// import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import photos from "./mocks/photos";
import topics from "./mocks/topics";

import './App.scss';

const App = () => {
  const [favouritePhotoIds, setFavouritePhotoIds] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFavourite = (photoId) => {
    setFavouritePhotoIds((prev) =>
      prev.includes(photoId)
        ? prev.filter((id) => id !== photoId)
        : [...prev, photoId]
    );
  };

  return (
    <div className="App">
      <HomeRoute 
       photos={photos} 
       topics={topics}
       favouritePhotoIds={favouritePhotoIds}
       toggleFavourite={toggleFavourite}
       setSelectedPhoto={setSelectedPhoto}
      />
       
      {selectedPhoto && (
        <PhotoDetailsModal />
      )}
    </div>
  );
};

export default App;
