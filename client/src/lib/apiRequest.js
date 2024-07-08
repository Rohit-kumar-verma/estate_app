import axios from 'axios'

const apiRequest = axios.create({
    // baseURL: 'http://localhost:8800/api',
    baseURL: 'https://estate-app-hu0u.onrender.com/api',
    withCredentials:true
})

export default apiRequest
