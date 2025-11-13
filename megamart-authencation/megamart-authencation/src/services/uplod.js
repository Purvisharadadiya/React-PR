import axios from "axios";

const uploadImage = async (fileData) => {
    console.log(fileData)
    let imgData = new FormData();

    imgData.append('file', fileData);
    imgData.append('upload_preset', 'megamart');
    imgData.append('cloud_name', 'dxkzii8gi');

    let res = await axios.post(`https://api.cloudinary.com/v1_1/dxkzii8gi/image/upload`, imgData)
    return res.data.secure_url;

}


export default uploadImage;