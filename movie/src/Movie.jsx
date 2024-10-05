const Movie = ({ movie }) => {
  const imageBaseURL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movieCard">
      <img src={`${imageBaseURL}${movie.poster_path}`} alt={movie.title} />
    </div>
  );
};

export default Movie;
