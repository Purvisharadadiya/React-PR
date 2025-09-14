export const getstoragedata = () => {
    return JSON.parse(localStorage.getItem("reviews")) || [];
}

export const setstroagedata = (data) => {
    localStorage.setItem("reviews", JSON.stringify(data));
}