const INITAL_STATE = {
  countries: [],
  message: "",
};

export const reducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "GET_COUNTRIES_SUCCESS":
      return { ...state, countries: action.payload };

    case "GET_COUNTRIES_ERROR":
      return { ...state, message: action.payload };

    default:
      return state;
  }
};
