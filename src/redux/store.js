import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/movieSlice";
import {genresReducer} from "./slices/genresSlice";

const rootReducer = combineReducers({
    movieReducer,
    // genresReducer
});

const setupStore = () => configureStore({
    reducer:rootReducer
});

export {
    setupStore
}