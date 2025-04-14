import "../styles/PhotoListItem.scss";

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

const PhotoListItem = () => {
  const {
    id,
    location,
    urls,
    user
  } = sampleDataForPhotoListItem;

  const locationString = `${location.city}, ${location.country}`;

  return (
    <div className="photo-list-item" key={id}>
      <img className="photo-image" src={urls.regular} alt={`Photo by ${user.name}`} />
      <div className="photo-details">
        <div className="user-info">
          <img className="user-profile" src={user.profile} alt={`${user.name}'s profile`} />
          <span className="username">@{user.username}</span>
        </div>
        <div className="location">
          {locationString}
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
