import axios from 'axios';
const apiKey = "Client ID 1H20HiEh06x6VFJU5eMp1uAunXvXx5Z44jCRTHFCeoQ"

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID 1H20HiEh06x6VFJU5eMp1uAunXvXx5Z44jCRTHFCeoQ"
    },
})