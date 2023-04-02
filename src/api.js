import axios from "axios";

const api = axios.create({
    baseURL: "https://64237754001cb9fc203f944e.mockapi.io/music-box"
})

export default api;