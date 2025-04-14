import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: 1,
  location: {
    city: "Montreal",
    country: "Canada",
  },
  urls: {
    full: "/Image-1-Full.jpeg",
    regular: "/Image-1-Regular.jpeg",
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg",
  },
};

const repeatedData = [1, 2, 3].map((num) => ({
  ...sampleDataForPhotoListItem,
  id: num,
}));

const App = () => {
  return (
    <div className="App">
      {repeatedData.map((photo) => (
        <PhotoListItem
          key={photo.id}
          id={photo.id}
          imageSource={photo.urls.regular}
          username={photo.user.username}
          location={`${photo.location.city}, ${photo.location.country}`}
          profile={photo.user.profile}
        />
      ))}
    </div>
  );
};

export default App;
