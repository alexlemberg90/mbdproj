import {urls} from "../urls";
import {axiosService} from "../axios.service/axiosService";

const moviesService = {
    getMovies: ()=>axiosService.get(urls.movies),
    getMovieDetails: (id)=>axiosService.get(`${urls.movieDetails}/${id}`),
    getGenres: ()=>axiosService.get(urls.genres),
    getSearch: (search)=>axiosService.get(`${urls.search}=${search}`)
};

export {
    moviesService
}