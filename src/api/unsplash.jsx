import axios from 'axios';
const apiKey =process.env.REACT_APP_KEY

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "apiKey"
    },
})