import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ShowDetail(props) {
  const { id } = useParams();

  const selectedMovie = props.moviesData.find((movie) => {
    return movie.id === id;
  });

  const { title, original_title, image } = selectedMovie;

  return (
    <section>
      hello
      <h2>{title}</h2>
      <h3>{original_title}</h3>
      <img src={image} alt={title} />
      <Link to="/">Back</Link>
    </section>
  );
}

export default ShowDetail;
