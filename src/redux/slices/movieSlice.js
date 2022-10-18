import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    movie: null,
    loading: false,
    error: null,
    search: []
};

const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getMovies();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{
        getMovie:(state, action)=>{
            state.movie = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                state.movies = action.payload
                state.loading = false
            })
            .addCase(getMovies.pending, (state) => {
                state.loading = true
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
});

const {reducer: movieReducer, actions:{getMovie}} = movieSlice;

const movieActions = {
    getMovies,
    getMovie
};

export {
    movieReducer,
    movieActions
}