import { useReducer } from "react";
import photos from "../mocks/photos";
import topics from "../mocks/topics";

export const ACTIONS = {
  TOGGLE_FAV: "TOGGLE_FAV",
  SET_PHOTOS: "SET_PHOTOS",
  SET_TOPICS: "SET_TOPICS",
  SELECT_PHOTO: "SELECT_PHOTO",
  CLOSE_MODAL: "CLOSE_MODAL",
};

const initialState = {
  photos,
  topics,
  favouritePhotoIds: [],
  selectedPhoto: null,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.TOGGLE_FAV:
      return {
        ...state,
        favouritePhotoIds: state.favouritePhotoIds.includes(payload.id)
          ? state.favouritePhotoIds.filter((id) => id !== payload.id)
          : [...state.favouritePhotoIds, payload.id],
      };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: payload.photo };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, selectedPhoto: null };
    case ACTIONS.SET_PHOTOS:
      return { ...state, photos: payload.photos };
    case ACTIONS.SET_TOPICS:
      return { ...state, topics: payload.topics };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    updateToFavPhotoIds: (id) => dispatch({ type: ACTIONS.TOGGLE_FAV, payload: { id } }),
    setPhotoSelected: (photo) => dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } }),
    onClosePhotoDetailsModal: () => dispatch({ type: ACTIONS.CLOSE_MODAL }),
  };
}
