// import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
//
// import {moviesService} from "../../services";
//
// const initialState = {
//     genres: [],
//     loading: false,
//     error: null,
// }
//
// const getGenres = createAsyncThunk(
//     'genresSlice/getGenres',
//     async (_, {rejectWithValue}) => {
//         try {
//             const {data} = await moviesService.getGenres();
//             return data
//         } catch (e) {
//             return rejectWithValue(e.response.data);
//         }
//     }
// );
//
// const genresSlice = createSlice({
//     name: 'genresSlice',
//     initialState,
//     extraReducers: builder =>
//         builder
//             .addCase(getGenres.fulfilled, (state, action) => {
//                 state.genres = action.payload
//                 state.loading = false
//             })
//             .addCase(getGenres.pending, (state) => {
//                 state.loading = true
//             })
//             .addCase(getGenres.rejected, (state, action) => {
//                 state.error = action.payload
//                 state.loading = false
//             })
// });
//
// const {reducer: genresReducer} = genresSlice;
//
// const genresActions = {
//     getGenres
// };
//
// export {
//     genresReducer,
//     genresActions
// }