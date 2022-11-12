import axios from "axios";

// create a new instance of axios with a custom config
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;
