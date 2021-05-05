import types from "./types";

const initState = {
  contacts: {
    items: [],
    filter: "",
  },
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.addContact:
      if (state.contacts.items.some(({ name }) => name === action.value.name)) {
        alert("This contact is already exist!");
        break;
      }
      return {
        contacts: {
          items: [...state.contacts.items, action.value],
          filter: state.contacts.filter,
        },
      };

    case types.removeContact:
      return {
        contacts: {
          items: state.contacts.items.filter(({ id }) => id !== action.value),
          filter: state.contacts.filter,
        },
      };

    case types.changeFilter:
      return {
        contacts: {
          items: state.contacts.items,
          filter: action.value,
        },
      };

    default:
      return state;
  }
};

export default reducer;
