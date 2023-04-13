import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from '../redux/Contacts/contactsSlice';

const persistContactsConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistContactsConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  middleware: getDefaultMiddlewares => [...getDefaultMiddlewares(), logger],
  devTools: process.env.NODE_ENV !== 'prodaction',
});

export const persistor = persistStore(store);
