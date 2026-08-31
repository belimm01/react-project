import { AnyAction } from 'redux';
import { HIDE_LOADER, SHOW_LOADER } from '../project/project.types';

const initialState = {
  isLoader: false,
};

export const appReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isLoader: true };
    case HIDE_LOADER:
      return { ...state, isLoader: false };
    default:
      return state;
  }
};
