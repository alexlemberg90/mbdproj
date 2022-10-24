import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../../services";

const initialState = {
    genres: [],
    genresMovie: [],
    loading: false,
    error: null,
}

const getGenres = createAsyncThunk(
    'genresSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {genres} = await genresService.getGenres();
            return genres
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
        getGenresMovie: (state, action) => {
            state.genresMovie = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload
                state.loading = false
            })
            .addCase(getGenres.pending, (state) => {
                state.loading = true
            })
            .addCase(getGenres.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
});

const {reducer: genresReducer, actions: {getGenresMovie}} = genresSlice;

const genresActions = {
    getGenres,
    getGenresMovie
};

export {
    genresReducer,
    genresActions
}