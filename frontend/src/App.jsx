import React from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";
import './App.scss';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        photos={state.photos}
        topics={state.topics}
        favouritePhotoIds={state.favouritePhotoIds}
        toggleFavourite={updateToFavPhotoIds}
        setSelectedPhoto={setPhotoSelected}
      />
       
      {state.selectedPhoto && (
        <PhotoDetailsModal 
          id={state.selectedPhoto.id}
          imageUrl={state.selectedPhoto.urls.full}
          user={state.selectedPhoto.user}
          location={state.selectedPhoto.location}
          similarPhotos={state.photos}
          setSelectedPhoto={onClosePhotoDetailsModal}
          favouritePhotoIds={state.favouritePhotoIds}
          toggleFavourite={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;
