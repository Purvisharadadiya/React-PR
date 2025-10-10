

const initialState = {
  products: JSON.parse(localStorage.getItem("hyyy")) || [],
  product: null,
  isLoading: false,
};

const productReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    

    case "ADD_product": {
      const data = [...state.products, action.payload];
      localStorage.setItem("hyyy", JSON.stringify(data));
      return {
        ...state,
        products: data,
      };
    }
    case "GET_ALL_product": {
      const data = JSON.parse(localStorage.getItem("hyyy")) || [];
      return {
        ...state,
        isLoading: false,
        products: data,
      };
    }


    case "DELETE_product": {
      const data = state.products.filter((v) => v.id !== action.payload);
      localStorage.setItem("hyyy", JSON.stringify(data));
      return {
        ...state,
        products: data,
      };
    }


    case "GET_product": {
      const allData = JSON.parse(localStorage.getItem("hyyy")) || [];
      const single = allData.find((v) => v.id == action.payload);
      console.log(single);
      return {
        ...state,
        product: single 
      };
    }

    case "UPDATE_product": {
      const updated = state.products.map((v) =>
        v.id == action.payload.id ? action.payload : v
      );
      localStorage.setItem("hyyy", JSON.stringify(updated));
      return {
        ...state,
        products: updated,
        product: null,
      };
    }

    default:
      return state;
  }
};

export default productReducer;
