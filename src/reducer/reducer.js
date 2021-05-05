import { createAction, createReducer } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add");
const removeContact = createAction("contacts/remove");
const changeFilter = createAction("contacts/filter");

const initState = {
  contacts: {
    items: [],
    filter: "",
  },
};

const reducer = createReducer(initState, {
  [addContact]: (state, action) => {
    if (state.contacts.items.some(({ name }) => name === action.value.name)) {
      alert("This contact is already exist!");
    }
    return {
      contacts: {
        items: [...state.contacts.items, action.value],
        filter: state.contacts.filter,
      },
    };
  },

  [removeContact]: (state, action) => {
    return {
      contacts: {
        items: state.contacts.items.filter(({ id }) => id !== action.value),
        filter: state.contacts.filter,
      },
    };
  },

  [changeFilter]: (state, action) => {
    return {
      contacts: {
        items: state.contacts.items,
        filter: action.value,
      },
    };
  },
});

export default reducer;
