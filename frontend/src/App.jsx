import React from 'react';
// import PhotoListItem from './components/PhotoListItem';
// import PhotoList from './components/PhotoList';
// import TopicListItem from './components/TopicListItem';
// import TopicList from './components/TopicList';
// import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from "./components/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";

import './App.scss';

const App = () => {
  return (
    <div className="App">
       <HomeRoute photos={photos} topics={topics} />
    </div>
  );
};

export default App;
