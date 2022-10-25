import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    movies: [],
    movie: null,
    loading: false,
    error: null,
    search: [],
    page: 1
};

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        getMovie: (state, action) => {
            state.movie = action.payload
        },
        getMovies: (state, action) => {
            state.movies = action.payload
        },
        getPage: (state, action) => {
            state.page = action.payload
        },
        searchPage: (state, action) => {
            state.search = action.payload
        }
    }
});

const {reducer: movieReducer, actions: {getMovie, getMovies, getPage, searchPage}} = movieSlice;

const movieActions = {
    getMovies,
    getMovie,
    getPage,
    searchPage
};

export {
    movieReducer,
    movieActions
}