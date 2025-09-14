export const getstoragedata = () => {
    return JSON.parse(localStorage.getItem("ayu")) || [];
}

export const setstroagedata = (data) => {
    localStorage.setItem("ayu", JSON.stringify(data));
}