import { MOVIES } from "./mocks/movies";
import Movie from "./Movie";
import "./App.css";

const App = () => {
  const movies = MOVIES.results;

  return (
    <div className="movieContainer">
      <div className="movieGrid">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
