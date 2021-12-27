export const BASE_URL = 'https://gorest.co.in';
export const USERS_ENDPOINT = '/public/v1/users';

export const patchRequestOptions = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
};

export const defaultGender = 'all';
