import axios from 'axios';

export const addNewproduct = () => {
    return {
        type: "ADD_product_SUC",
    }
}
export const addNewproductRej = (msg) => {
    return {
        type: "ADD_product_REJ",
        message: msg
    }
}

export const getAllproducts = (data) => {
    return {
        type: "GET_ALL_product_SUC",
        payload: data
    }
}

export const getAllproductsRej = (msg) => {
    return {
        type: "GET_ALL_product_REJ",
        message: msg
    }
}


export const deleteproductRej = (msg) => {
    return {
        type: "DELETE_product_REJ",
        message: msg
    }
}
export const getproductRej = (msg) => {
    return {
        type: "GET_product_REJ",
        message: msg
    }
}

export const getproduct = (data) => {
    return {
        type: "GET_product_SUC",
        payload: data
    }
}

export const updateproduct = () => {
    return {
        type: "UPDATE_product_SUC",
    }
}

// const loading = () => {
//     return {
//         type: "LOADING"
//     }
// }


// middleware
export const getAllproductsAsync = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(data => dispatch(getAllproducts(data)))
            .catch(err => dispatch(getAllproductsRej(err.message)))
    }
}

export const addNewproductAsync = (data) => {
    return (dispatch) => {

        axios.post("http://localhost:3000/products", data)
            .then(() => dispatch(addNewproduct()))
            .catch(err => dispatch(addNewproductRej(err.message)))
    }
}

export const deleteproductAsync = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3000/products/${id}`)
            .then(() => dispatch(getAllproductsAsync()))
            .catch(err => {console.log(err);dispatch(deleteproductRej(err.message))})
    }
}

export const getproductAsync = (id) => {
    return (dispatch) => {

        axios.get(`http://localhost:3000/products/${id}`)
            .then((res) => dispatch(getproduct(res.data)))
            .catch(err => dispatch(getproductRej(err.message)))
    }
}

export const updateproductAsync = (data) => {
    return (dispatch) => {

        axios.put(`http://localhost:3000/products/${data.id}`, data)
            .then(() => dispatch(updateproduct()))
            .catch(err => dispatch(getproductRej(err.message)))
    }
}