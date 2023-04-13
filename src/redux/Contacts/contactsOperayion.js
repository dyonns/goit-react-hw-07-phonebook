import {
  addContactApi,
  getContactApi,
  removeContactApi,
} from 'components/servises/contactsApi';
import {
  addError,
  addRequest,
  addSuccess,
  getContactError,
  getContactRequest,
  getContactSuccess,
  removeContactError,
  removeContactRequest,
  removeContactSuccess,
} from './contactsSlice';

export const addContact = newContact => (dispatch, getState) => {
  dispatch(addRequest());

  addContactApi(newContact)
    .then(contact => dispatch(addSuccess(contact)))
    .catch(err => dispatch(addError(err.message)));
};

export const getContact = () => dispatch => {
  dispatch(getContactRequest());
  getContactApi()
    .then(data => dispatch(getContactSuccess(data)))
    .catch(err => dispatch(getContactError(err.message)));
};

export const removeContact = id => dispatch => {
  dispatch(removeContactRequest());

  removeContactApi(id)
    .then(id => dispatch(removeContactSuccess(id)))
    .catch(err => dispatch(removeContactError(err.meassage)));
};
