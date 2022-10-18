import './App.css';
import {Route, Routes} from "react-router-dom";
import Movies from "./components/MoviesList/Movies";
import BaseLayout from "./layouts/BaseLayout";
import MovieInfo from "./components/MovieInfo/MovieInfo";

function App() {

    return (
        <BaseLayout>
            <Routes>
                <Route path={"/"} element={<Movies/>}/>

                <Route path={"/movie/:id"} element={<MovieInfo/>}/>
            </Routes>
        </BaseLayout>


    );
}

export default App;
