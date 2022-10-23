import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {genresService, moviesService} from "../../services";

const initialState = {
    genres: [],
    genresMovie:[],
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
// const getGenresMovie = createAsyncThunk(
//     'genresSlice/getGenresMovie',
//     async (_, {rejectWithValue}) => {
//         try {
//             const {results} = await moviesService.getGenresMovie();
//             return results
//         } catch (e) {
//             return rejectWithValue(e.response.data);
//         }
//     }
// );

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers:{
        getGenresMovie:(state, action)=>{
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
            // .addCase(getGenresMovie.fulfilled,(state, action)=>{
            //     state.genresMovie = action.payload
            // })
});

const {reducer: genresReducer,actions:{getGenresMovie}} = genresSlice;

const genresActions = {
    getGenres,
    getGenresMovie
};

export {
    genresReducer,
    genresActions
}