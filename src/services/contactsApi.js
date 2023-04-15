import axios from 'axios';

axios.defaults.baseURL = 'https://6436dd1e8205915d34feebb3.mockapi.io';

export const addContactsApi = contact => {
  return axios.post('/contacts', contact).then(({ data }) => {
    return { ...contact, id: data.name };
  });
};

export const getContactsApi = () => {
  return axios.get('/contacts').then(({ data }) => data);
};

export const removeContactsApi = id => {
  return axios.delete(`/contacts/${id}`).then(() => id);
};
