import './App.css';
import {Route, Routes} from "react-router-dom";


import {Baselayout} from "./components";
import Main from "./components/main/Main";
import Movie from "./components/movies/Movie";
import GenresMovies from "./components/genresMovies/GenresMovies";


function App() {

    return (
        <Baselayout>
            <Routes>
                <Route path="/" element={<Main />}/>

                <Route path="/movies/:id" element={ <Movie/>}/>

                <Route path="/genresMovie/:id" element={<GenresMovies/>}/>

            </Routes>
        </Baselayout>


    );
}

export default App;
