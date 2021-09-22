import { combineReducers } from 'redux';
import { initialState } from './initialState';
import { SPACE_IMAGAES } from '../actions/index';

export const REDUCER_STATUS = {
  init: 'init',
  pending: 'pending',
  success: 'success',
  error: 'error',
};

const imagesReducer = (state = initialState.images, action) => {
  switch (action.type) {
    case SPACE_IMAGAES.LIKE: {
      return {
        ...state,
        liked: !initialState.images.liked,
      };
    }
    default: 
      return state;
  }
}

export const allReducers = combineReducers({
  images: imagesReducer,
});

export { initialState } from './initialState';
export default allReducers;
