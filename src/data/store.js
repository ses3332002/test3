import { createStore } from 'redux';
import { defaultGender } from './variables';

const initialState = { curUser: null, selectedGender: defaultGender, page: 1 };
const SELECT_USER = 'select_user';
const SELECT_GENDER = 'select_gender';
const SET_PAGE = 'set_page';

export const userAC = user => {
  return {
    type: SELECT_USER,
    user,
  };
};

export const genderAC = gender => {
  return {
    type: SELECT_GENDER,
    gender,
  };
};

export const pageAC = page => {
  return {
    type: SET_PAGE,
    page,
  };
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_USER: {
      return { ...state, curUser: action.user };
    }
    case SELECT_GENDER: {
      return { ...state, selectedGender: action.gender };
    }
    case SET_PAGE: {
      return { ...state, page: action.page };
    }
    default:
      return state;
  }
}

export let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
