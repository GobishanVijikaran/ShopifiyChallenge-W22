import { createAction } from 'redux-actions';

export const SPACE_IMAGAES = {
  ADD: 'ADD_IMAGE',
  REMOVE: 'REMOVE_LIKED_IMAGES',
  REQUEST: 'GET_LIKED_IMAGES',
  SUCCESS: 'GET_LIKED_IMAGES_SUCCESS',
  ERROR: 'GET_LIKED_IMAGES_ERROR',
};

export const addImage = createAction(SPACE_IMAGAES.ADD);
export const removeLikedImage = createAction(SPACE_IMAGAES.REMOVE);
export const storeLikedImage = createAction(SPACE_IMAGAES.SUCCESS);
export const requestLikedImage = createAction(SPACE_IMAGAES.REQUEST);
export const getLikedImageError = createAction(SPACE_IMAGAES.ERROR);