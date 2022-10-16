export default function Movie({movie}) {
    const {backdrop_path,genre_ids,original_title,release_date,vote_average} = movie;
    return (<div>
    <h1>{original_title}</h1>
        </div>
    );
}