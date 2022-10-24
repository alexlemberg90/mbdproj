import {AXIOS} from "./axiosSet";

const KEY = 'api_key=a2b50c9bb2c18c72f8304c905e759395';

class MoviesService {
    async getMovies(pages) {
        const {data} = await AXIOS.get(`/discover/movie?page=${pages}`)
        return data

    }

    async getMovieDetails(movie_id) {
        const {data} = await AXIOS.get(`/movie/${movie_id}`)
        return data
    }

    async getGenresMovie(genres_id) {
        const {data: {results}} = await AXIOS.get(`/discover/movie?
${KEY}&language=en-US&sort_by=popularity.desc&with_genres=${genres_id}`)
        return results
    }

    async getSearch(search) {
        const {data} = await AXIOS.get(`/search/keyword?query=${search}`)
        return data
    }
}

export const moviesService = new MoviesService();