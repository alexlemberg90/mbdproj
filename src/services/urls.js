const baseURL = 'https://api.themoviedb.org/3'

const urls = {
    movies : '/discover/movie',
    movieDetails : `/movie`,
    genres: '/genre/movie/list',
    search: '/search/keyword?query',
}
export {
    baseURL,
    urls
}