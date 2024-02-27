export const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      console.log(action);
      return {
        ...state,
        isLoggedIn: true,
      };

    case "GET_DOCUMENTS":
      return {
        ...state,
        loading: false,
        docs: action.payload,
      };

    case "GET_IDENTFIER_DOCUMENTS":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
