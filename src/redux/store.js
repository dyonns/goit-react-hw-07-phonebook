import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './Contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    items: contactsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
