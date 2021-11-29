export const BASE_URL = 'https://gorest.co.in';
export const USERS_ENDPOINT = '/public/v1/users';

export const patchRequestOptions = {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
};
