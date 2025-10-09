export const Getstroagedata = () => {

    return JSON.parse(localStorage.getItem("Moive")) || [];
}

export const Setstroagedata = (data) => {

    localStorage.setItem("Moive", JSON.stringify(data));
}