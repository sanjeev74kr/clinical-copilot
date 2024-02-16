export const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      console.log(action)
      return {
        ...state,
        isLoggedIn: true,
      };
    case "QUERY_CHANGED":  
    return {
      ...state, termChanged: !state.termChanged
    }
    default:
      return state;
  }
};
