
export const addNewProduct = (product) => {
  return {
    type: "ADD_product", 
    payload: product,
  };
};

export const getAllproduct = () => {
  return {
    type: "GET_ALL_product",
  };
};

export const deleteproduct = (id) => {
  return {
    type: "DELETE_product",
    payload: id,
  };
};

export const getproduct = (id) => {
  return {
    type: "GET_product",
    payload: id,
  };
};

export const updateproduct = (data) => {
  return {
    type: "UPDATE_product",
    payload: data,
  };
};
