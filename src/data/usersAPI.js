import { patchRequestOptions, BASE_URL, USERS_ENDPOINT } from './variables';

export function getUsers(request, page) {
  return fetch(`${BASE_URL + USERS_ENDPOINT + request}page=${page}`)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.error('there was some error:', err);
    });
}

export function editUser(user) {
  patchRequestOptions.body = JSON.stringify(user);
  return fetch(`${BASE_URL + USERS_ENDPOINT}/${user.id}`, patchRequestOptions).catch(err => {
    console.error('there was some error:', err);
  });
}
