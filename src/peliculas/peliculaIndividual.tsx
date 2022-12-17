import css from "./peliculaindividual.module.css";
import { pelicula } from "./peliculas.model";

const PeliculaIndividual = (props: PeliculaIndividualProps) => {
  const construirLink = () => `/pelicula/${props.pelicula.id}`;
  return (
    <div className={css.div}>
      <a href={construirLink()}>
        <img src={props.pelicula.poster} alt="POSTER" />
      </a>
      <p>
        <a href={construirLink()}>{props.pelicula.titulo}</a>
      </p>
    </div>
  );
};

export default PeliculaIndividual;

interface PeliculaIndividualProps {
    pelicula: pelicula;
  }
  