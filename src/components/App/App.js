import React, { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { userAC, genderAC, pageAC } from '../../data/store';
import { Users } from '../Users/Users';
import { Editor } from '../Editor/Editor';
import { Welcome } from '../Welcome/Welcome';

export let AppContext = createContext(null);

export function App() {
  return (
    <AppContext.Provider
      value={{
        userAC,
        genderAC,
        pageAC,
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
