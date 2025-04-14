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

const App = () => {
  return (
    <div className="App">
      <PhotoListItem
        id={sampleDataForPhotoListItem.id}
        imageSource={sampleDataForPhotoListItem.urls.regular}
        username={sampleDataForPhotoListItem.user.username}
        location={`${sampleDataForPhotoListItem.location.city}, ${sampleDataForPhotoListItem.location.country}`}
        profile={sampleDataForPhotoListItem.user.profile}
      />
    </div>
  );
};

export default App;
