const initialState = {
  orders: [],
  image: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ORDERS":
      return {
        ...state,
        orders: action.payload,
      };

    case "GET_IMAGE":
      return {
        ...state,
        image: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
