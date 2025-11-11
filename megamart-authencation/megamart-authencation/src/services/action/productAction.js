import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase.config";

export const addNewProduct = (data) => ({
  type: "ADD_PRODUCT_SUC",
  payload: data,
});

export const addNewProductRej = (msg) => ({
  type: "ADD_PRODUCT_REJ",
  message: msg,
});

export const getAllProduct = (data) => ({
  type: "GET_ALL_PRODUCT_SUC",
  payload: data,
});

export const getAllProductRej = (msg) => ({
  type: "GET_ALL_PRODUCT_REJ",
  message: msg,
});

export const deleteProductRej = (msg) => ({
  type: "DELETE_PRODUCT_REJ",
  message: msg,
});

export const getProduct = (data) => ({
  type: "GET_PRODUCT_SUC",
  payload: data,
});

export const getProductRej = (msg) => ({
  type: "GET_PRODUCT_REJ",
  message: msg,
});

export const updateProduct = () => ({
  type: "UPDATE_PRODUCT_SUC",
});

export const updateProductRej = (msg) => ({
  type: "UPDATE_PRODUCT_REJ",
  message: msg,
});

export const resetProductState = () => ({
  type: "RESET_PRODUCT_STATE",
});

// 🟢 Get all products
export const getallproductAsync = () => {
  return async (dispatch) => {
    try {
      const res = await getDocs(collection(db, "products"));
      const result = res.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));
      dispatch(getAllProduct(result));
    } catch (error) {
      dispatch(getAllProductRej(error.message));
    }
  };
};

// 🟢 Add new product
export const addNewProductAsync = (data) => {
  return async (dispatch) => {
    try {
      if (!data.id) throw new Error("Product ID missing");
      await setDoc(doc(db, "products", data.id), data);
      dispatch(addNewProduct(data));
    } catch (error) {
      dispatch(addNewProductRej(error.message));
    }
  };
};

// 🟢 Delete product
export const deleteProductAsync = (id) => {
  return async (dispatch) => {
    try {
      await deleteDoc(doc(db, "products", id));
      dispatch(getallproductAsync());
    } catch (error) {
      dispatch(deleteProductRej(error.message));
    }
  };
};

// 🟢 Get single product
export const getProductAsync = (id) => {
  return async (dispatch) => {
    try {
      const res = await getDoc(doc(db, "products", id));
      if (res.exists()) {
        dispatch(getProduct({ id: res.id, ...res.data() }));
      } else {
        throw new Error("Product not found");
      }
    } catch (error) {
      dispatch(getProductRej(error.message));
    }
  };
};

// 🟢 Update product
export const updateProductAsync = (data) => {
  return async (dispatch) => {
    try {
      if (!data.id) throw new Error("Product ID missing for update");
      await updateDoc(doc(db, "products", data.id), data);
      dispatch(updateProduct());
    } catch (error) {
      dispatch(updateProductRej(error.message));
    }
  };
};
