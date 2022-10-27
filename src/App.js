import './App.css';
import {Route, Routes} from "react-router-dom";


import {BaseLayout} from "./components";
import Main from "./components/main/Main";
import Movie from "./components/movies/Movie";
import GenresMovies from "./components/genresMovies/GenresMovies";
import FinderPage from "./components/additionalСomponent/finder/FinderPage";

function App() {

    return (
        <BaseLayout>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/movies/:id" element={<Movie/>}/>
                <Route path="/genresMovie/:id" element={<GenresMovies/>}/>
                <Route path="/search" element={<FinderPage/>}/>

            </Routes>
        </BaseLayout>


    );
}

export default App;
