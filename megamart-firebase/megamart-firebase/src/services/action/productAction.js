import axios from "axios";
import { collection, getDocs, doc, setDoc, deleteDoc, updateDoc, getDoc } from "firebase/firestore";
import { db } from '../../config/firebase.config';
export const addNewProduct = (data) => {
    return {
        type: "ADD_PRODUCT_SUC",
        payload: data
    }
}
export const addNewProductRej = (msg) => {
    return (
        {
            type: "ADD_PRODUCT_REJ",
            message: msg
        }
    )
}
export const getAllProduct = (data) => {
    return (
        {
            type: "GET_ALL_PRODUCT_SUC",
            payload: data
        }
    )
}
export const getAllProductRej = (msg) => {
    return (
        {
            type: "GET_ALL_PRODUCT_REJ",
            message: msg
        }
    )
}
export const deleteProductRej = (msg) => {
    return (
        {
            type: "DELETE_PRODUCT_REJ",
            message: msg
        }
    )
}
export const getProduct = (data) => {
    return (
        {
            type: "GET_PRODUCT_SUC",
            payload: data
        }
    )
}
export const getProductRej = (msg) => {
    return (
        {
            type: "GET_PRODUCT_REJ",
            message: msg
        }
    )
}
export const updateProduct = () => {
    return (
        {
            type: "UPDATE_PRODUCT_SUC",
        }
    )
}
export const updateProductRej = (msg) => {
    return (
        {
            type: "UPDATE_PRODUCT_REJ",
            message: msg
        }
    )
}

export const getallproductAsync = () => {
  return async (dispatch) => {
    try {
      let res = await getDocs(collection(db, "products"));
      let result = [];
      res.forEach((docSnap) => {
        result.push({
          id: docSnap.id,   
          ...docSnap.data()
        });
      });
      dispatch(getAllProduct(result));
    } catch (error) {
      dispatch(getAllProductRej(error.message));
    }
  };
};

export const addNewProductAsync = (data) => {
   
    return async (dispatch) => {
        try {
        
            await setDoc(doc(db, "products", `${data.id}`), data);
            dispatch(addNewProduct(data));
        }
        catch (error) {
            dispatch(addNewProductRej(error.message))
        }
    }
}

export const deleteProductAsync = (id) => {
    return async (dispatch) => {
        try {
            console.log("Deleting product with ID:", id);
            await deleteDoc(doc(db, "products", id));
            console.log("Deleted successfully");
            dispatch(getallproductAsync());
        } catch (error) {
            console.error("Error deleting product:", error.message);
            dispatch(deleteProductRej(error.message));
        }
    };
};



export const getProductAsync = (id) => {
 
    return async (dispatch) => {
        try {
            let res = await getDoc(doc(db, "products", `${id}`))
            dispatch(getProduct(res.data()))
        } catch (error) {
            dispatch(getProductRej(error.message))
        }
    }
}
export const updateProductAsync = (data) => {
 

    return async (dispatch) => {
       
        try {
            await updateDoc(doc(db, "products", `${data.id}`), data)
            dispatch(updateProduct())
        } catch (error) {   
            dispatch(getProductRej(error.message))
        }

    }
}