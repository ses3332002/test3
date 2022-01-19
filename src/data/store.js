import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { defaultGender } from './variables';
import { getUsers } from './usersAPI';

const initialState = {
  curUser: null,
  selectedGender: defaultGender,
  page: 1,
  users: [],
  paginationInfo: {},
};
const SELECT_USER = 'select_user';
const SELECT_GENDER = 'select_gender';
const SET_PAGE = 'set_page';
const GET_USERS = 'get_users';
// const PATCH_USER = 'patch_user';

export const userAC = user => {
  return {
    type: SELECT_USER,
    user,
  };
};

export const getUsersAC = (selectedGender, page) => {
  return dispatch => {
    getUsers(selectedGender, page).then(({ data }) => {
      dispatch(usersAC(data.data, data.meta.pagination));
    });
  };
};

// export const patchUserAC = (user) => {
//   return dispatch => {

//   };
// };

export const usersAC = (users, paginationInfo) => {
  return {
    type: GET_USERS,
    users,
    paginationInfo,
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
    case GET_USERS: {
      return { ...state, users: action.users, paginationInfo: action.paginationInfo };
    }
    default:
      return state;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
