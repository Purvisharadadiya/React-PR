import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  updateDoc
} from "firebase/firestore";
import { db } from "../../config/firebase.config";

export const addNewBlog = (data) => ({
  type: "ADD_BLOG_SUC",
  payload: data,
});

export const addNewBlogRej = (msg) => ({
  type: "ADD_BLOG_REJ",
  message: msg,
});

export const getAllBlogs = (data) => ({
  type: "GET_ALL_BLOG_SUC",
  payload: data,
});

export const getAllBlogsRej = (msg) => ({
  type: "GET_ALL_BLOG_REJ",
  message: msg,
});

export const updateBlog = () => ({
  type: "UPDATE_BLOG_SUC",
});

export const updateBlogRej = (msg) => ({
  type: "UPDATE_BLOG_REJ",
  message: msg,
});

export const deleteBlogRej = (msg) => ({
  type: "DELETE_BLOG_REJ",
  message: msg,
});


export const addNewBlogAsync = (data) => {
  return async (dispatch) => {
    try {
      if (!data.id) throw new Error("Blog ID missing");
      await setDoc(doc(db, "blogs", data.id), data);
      dispatch(addNewBlog(data));
    } catch (error) {
      dispatch(addNewBlogRej(error.message));
    }
  };
};

export const getAllBlogsAsync = () => {
  return async (dispatch) => {
    try {
      const res = await getDocs(collection(db, "blogs"));
      const result = res.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));

      dispatch(getAllBlogs(result));
    } catch (error) {
      dispatch(getAllBlogsRej(error.message));
    }
  };
};

export const deleteBlogAsync = (id) => {
  return async (dispatch) => {
    try {
      await deleteDoc(doc(db, "blogs", id));
      dispatch(getAllBlogsAsync());
    } catch (error) {
      dispatch(deleteBlogRej(error.message));
    }
  };
};

export const updateBlogAsync = (data) => {
  return async (dispatch) => {
    try {
      await updateDoc(doc(db, "blogs", data.id), data);
      dispatch(updateBlog());
    } catch (error) {
      dispatch(updateBlogRej(error.message));
    }
  };
};
