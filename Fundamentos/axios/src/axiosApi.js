import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://api-burb.onrender.com/api/'
})

export default axiosInstance