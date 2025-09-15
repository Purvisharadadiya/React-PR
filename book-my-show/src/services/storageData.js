export const getstoragedata = () => {
    return JSON.parse(localStorage.getItem("movie")) || [];
}

export const setstroagedata = (data) => {
    localStorage.setItem("movie", JSON.stringify(data));
}