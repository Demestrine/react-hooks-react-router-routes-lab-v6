import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import movies from "../data/movies";

function Movie() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <>
      <NavBar />
      <header>
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>{movie.time} minutes</p>
        {movie.genres.map((genre) => (
          <span key={genre}>{genre} </span>
        ))}
      </main>
    </>
  );
}

export default Movie;

