import Movie from "./Movie";

function MovieList(props) {
  const { moviesData } = props;

  const movies = moviesData.map((movie) => {
    return <Movie moviesData={movie} key={movie.id} />;
  });

  return <article>{movies}</article>;
}

export default MovieList;
