import {axiosService} from "../axios.service/axiosService";
import {urls} from "../urls";

const moviesService = {
    getMovies: ()=>axiosService.get(urls.movies),
    getGenres: ()=>axiosService.get(urls.genres),
    getSearch: (search)=>axiosService.get(`${urls.search}=${search}`)
};

export {
    moviesService
}