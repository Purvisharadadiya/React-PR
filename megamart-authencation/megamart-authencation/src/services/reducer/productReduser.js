const initialState = {
  products: [],
  product: null,
  isError: null,
  isCreated: false,
  isUpdated: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_SUC":
      return {
        ...state,
        products: [...state.products, action.payload],
        isCreated: true,
        isError: null,
      };

    case "ADD_PRODUCT_REJ":
      return {
        ...state,
        isError: action.message,
        isCreated: false,
      };

    case "GET_ALL_PRODUCT_SUC":
      return {
        ...state,
        products: action.payload,
        isCreated: false,
        isUpdated: false,
        isError: null,
      };

    case "GET_ALL_PRODUCT_REJ":
      return {
        ...state,
        isError: action.message,
      };

    case "DELETE_PRODUCT_REJ":
      return {
        ...state,
        isError: action.message,
      };

    case "GET_PRODUCT_SUC":
      return {
        ...state,
        product: action.payload,
      };

    case "GET_PRODUCT_REJ":
      return {
        ...state,
        isError: action.message,
      };

    case "UPDATE_PRODUCT_SUC":
      return {
        ...state,
        isUpdated: true,
        isError: null,
      };

    case "UPDATE_PRODUCT_REJ":
      return {
        ...state,
        isUpdated: false,
        isError: action.message,
      };

    case "RESET_PRODUCT_STATE":
      return {
        ...state,
        isCreated: false,
        isUpdated: false,
        isError: null,
      };

    default:
      return state;
  }
};
