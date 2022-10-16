import axios from "axios";

import {baseURL} from "../urls";
import {Token} from "../token";

const axiosService = axios.create({
    baseURL,
    headers: {
        'Authorization': `Bearer ${Token}`
    }
});

export {
    axiosService
}