import axios from "axios"

export const AddMenData = (data) => {
    return {
        type: "ADD",
        payload: data
    }
}
export const AddMenDataRej = (msg) => {
    return {
        type: "ADD_REJ",
        payload: msg
    }
}

export const DeleteMenData = (data) => {
    return {
        type: "DELETE",
        payload: data
    }
}
export const GetOneMenData = (id) => {
    return {
        type: "GET_ONE",
        payload: id
    }
}
export const UpdateMenData = (data) => {
    return {
        type: "UPDATE",
        payload: data
    }
}
export const filterData = (data) => {
    return {
        type: "FILTER_MEN",
        payload: data
    }
}


export const AddMenDataAsync= (data) => {
    return (dispatch) => {

        axios.post("http://localhost:3000/men",data)
        .then(() => dispatch(AddMenData()))
        .catch(err => dispatch(AddMenDataRej(err.message)))
    }
}
