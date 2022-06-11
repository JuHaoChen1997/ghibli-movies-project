import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ShowDetail(props) {
  const { id } = useParams();

  const selectedMovie = props.moviesData.find((movie) => {
    return movie.id === id;
  });

  const {
    title,
    original_title,
    director,
    producer,
    release_date,
    running_time,
    rt_score,
    description,
  } = selectedMovie;

  return (
    <section>
      hello
      <h2>{title}</h2>
      <h3>{original_title}</h3>
      <p>Director: {director}</p>
      <p>Producer: {producer}</p>
      <p>Release Date: {release_date}</p>
      <p>Running Time: {running_time} Minutes</p>
      <p>Rotten Tomato Score: {rt_score}</p>
      <p>Description: {description}</p>
      <Link to="/">Back</Link>
    </section>
  );
}

export default ShowDetail;
