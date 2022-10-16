import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    loading: false,
    error: null,
    search: []
}

const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getMovies();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
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

const {reducer: movieReducer} = movieSlice;
console.log(movieSlice.reducer)

const movieActions = {
    getMovies
};

export {
    movieReducer,
    movieActions
}