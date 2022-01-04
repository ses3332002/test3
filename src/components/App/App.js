import React, { useReducer, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { defaultGender } from '../../data/variables';
import { Users } from '../Users/Users';
import { Editor } from '../Editor/Editor';
import { Welcome } from '../Welcome/Welcome';

export let AppContext = createContext(null);

export function App() {
  const initialState = { curUser: null, selectedGender: defaultGender };
  const SELECT_USER = 'select_user';
  const SELECT_GENDER = 'select_gender';

  const userAC = user => {
    return {
      type: SELECT_USER,
      user,
    };
  };

  const genderAC = gender => {
    return {
      type: SELECT_GENDER,
      gender,
    };
  };

  function reducer(state, action) {
    switch (action.type) {
      case SELECT_USER: {
        return { ...state, curUser: action.user };
      }
      case SELECT_GENDER: {
        return { ...state, selectedGender: action.gender };
      }
      default:
        return state;
    }
  }

  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        dispatch,
        userAC,
        genderAC,
        state,
      }}
    >
      <BrowserRouter basename={process.env.BASENAME}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/users" element={<Users />} />
          <Route path="/edit" element={<Editor />} />
          <Route path="*" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
