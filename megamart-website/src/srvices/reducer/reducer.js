
const initalState = {
    products: [],
    product: null,
    isLoading: false,
    isError: "",
    isCreated: false,
    isUpdated: false
}


export const productReducer = (state = initalState, action) => {
    switch (action.type) {

        case "ADD_product_SUC":
            return {
                ...state,
                isCreated: true
            }
        case "ADD_product_REJ":
            return {
                ...state,
                isError: action.msg
            }

        case "GET_ALL_product_SUC":
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                isCreated: false,
                isError: "",
                isUpdated: false
            }
        case "GET_ALL_product_REJ":
            return {
                ...state,
                isLoading: false,
                isCreated: false,
                isError: action.msg
            }
        case "DELETE_product_REJ":
            return {
                ...state,
                isError: action.msg
            }
        // case "DELETE_product_SUC":
        //     return {
        //         ...state,
        //         products: state.products.filter((p) => p.id !== action.payload),
        //     };

        case "GET_product_REJ":
            return {
                ...state,
                isError: action.msg
            }
        case "GET_product_SUC":
            return {
                ...state,
                product: action.payload
            }

        case "UPDATE_product_SUC":
            return {
                ...state,
                product: null,
                isUpdated: true
            }
        default:
            return state;
    }
}



// [11]