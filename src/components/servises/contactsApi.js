import axios from 'axios';

axios.defaults.baseURL = 'https://6436dd1e8205915d34feebb3.mockapi.io';

export const addContactApi = contact => {
  return axios.post('/contacts', contact).then(({ data }) => {
    return { ...contact, id: data.name };
  });
};

export const getContactApi = () => {
  return axios
    .get('/contacts')
    .then(({ data }) =>
      Object.entries(data).map(([id, contacts]) => ({ ...contacts, id: id }))
    );
};

export const removeContactApi = id => {
  return axios.delete(`/contacts/${id}`).then(() => id);
};
