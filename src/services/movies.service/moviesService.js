import {urls} from "../urls";
import {axiosService} from "../axios.service/axiosService";

const moviesService = {
    getMovies: ()=>axiosService.get(urls.movies),
    getGenres: ()=>axiosService.get(urls.genres),
    getSearch: (search)=>axiosService.get(`${urls.search}=${search}`)
};

export {
    moviesService
}