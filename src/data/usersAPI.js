import { patchRequestOptions, defaultGender, BASE_URL, USERS_ENDPOINT } from './variables';
import axios from 'axios';

export function getUsers(selectedGender, page) {
  let gender = null;
  if (selectedGender !== defaultGender) {
    gender = selectedGender;
  }

  return axios
    .get(BASE_URL + USERS_ENDPOINT, {
      params: { page, gender },
    })
    .catch(err => {
      console.error('there was some error:', err);
    });
}

export function patchUser(user) {
  return axios
    .patch(BASE_URL + USERS_ENDPOINT + '/' + user.id, user, patchRequestOptions)
    .catch(err => {
      console.error('there was some error:', err);
    });
}
