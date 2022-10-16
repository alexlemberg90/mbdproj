import axios from "axios";

import {baseURL} from "../urls";
import {Token} from "../token";

const axiosService = axios.create({baseURL});
axiosService.interceptors.request.use((config)=>{
    const access = Token;

    if (access) {
        config.headers.Authorization = `Bearer ${access}`
    }
    return config
})

export {
    axiosService
}