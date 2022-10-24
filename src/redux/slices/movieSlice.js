import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    movies: [],
    movie: null,
    loading: false,
    error: null,
    search: '',
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
        }
    }
});

const {reducer: movieReducer, actions: {getMovie, getMovies, getPage}} = movieSlice;

const movieActions = {
    getMovies,
    getMovie,
    getPage
};

export {
    movieReducer,
    movieActions
}