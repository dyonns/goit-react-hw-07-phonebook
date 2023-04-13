import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    getContactRequest(state) {
      state.isLoading = true;
    },
    getContactSuccess(state, { payload }) {
      state.isLoading = false;
      state.items = payload;
    },
    getContactError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    addRequest(state) {
      return { ...state, isLoading: true };
    },
    addSuccess(state, { payload }) {
      return {
        ...state,
        isLoading: false,
        items: [...state.items, payload],
      };
    },
    addError(state, { payload }) {
      return { ...state, isLoading: false, error: payload };
    },

    removeContactRequest(state) {
      state.isLoading = true;
    },
    removeContactSuccess(state, { payload }) {
      return {
        ...state,
        isLoading: false,
        items: state.items.filter(el => el.id !== payload),
      };
    },
    removeContactError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    changeFilter: {
      reducer(state, { payload }) {
        return {
          ...state,
          filter: payload,
        };
      },
      prepare(event) {
        return {
          payload: event.target.value,
        };
      },
    },
  },
});

export const {
  addSuccess,
  addRequest,
  addError,
  changeFilter,
  getContactError,
  getContactRequest,
  getContactSuccess,
  removeContactError,
  removeContactRequest,
  removeContactSuccess,
} = contactsSlice.actions;

export default contactsSlice.reducer;
