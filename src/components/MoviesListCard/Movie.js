import styles from './movie.module.css'

export default function Movie({movie}) {
    const {poster_path, genre_ids, original_title, release_date, vote_average, overview} = movie;
    return (<div className={styles.filmItem}>
            <div>
                <img className={styles.imgStyles} src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                     alt={`${original_title} poster`}/>
            </div>
            <div>
                <h2>{original_title}</h2>
                {/*<h3>Genres: {movieGenresList.map(({name, id}) => <span key={id}>{name} </span>)} </h3>*/}
                {/*<span>Rating:{vote_average} (total vote: {vote_count})</span>*/}
                <p>{overview}</p>
                <span>Release date:{release_date}</span>

            </div>
        </div>
    );
}