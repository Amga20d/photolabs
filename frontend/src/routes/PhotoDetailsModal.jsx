import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ setSelectedPhoto }) => {
  const handleClose = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={handleClose}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;
