import "./Movie.css";
import { Link } from "react-router-dom";

function Movie(props) {
  const { id, title, original_title, image } = props.moviesData;

  return (
    <section>
      <h2>{title}</h2>
      <h3>{original_title}</h3>
      <img src={image} alt={title} />
      <Link to={id}>
        <button>More Detail</button>
      </Link>
    </section>
  );
}

export default Movie;
