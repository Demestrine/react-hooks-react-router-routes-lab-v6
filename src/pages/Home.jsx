import NavBar from "../components/NavBar";
import movies from "../data/movies";
import MovieCard from "../components/MovieCard";

function Home() {
  return (
    <>
      <NavBar />
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        {movies.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </main>
    </>
  );
}

export default Home;

