import ListadoGenerico from "../utils/ListadoGenerico";
import css from "./ListadoPeliculas.module.css";
import PeliculaIndividual from "./PeliculaIndividual";
import { pelicula } from "./peliculas.model";

const ListadoPeliculas = (props: listadoPeliculasProps) => {
  return (
    <ListadoGenerico listado={props.peliculas}>
      <div className={css.div}>
        {props.peliculas?.map((pelicula) => (
          <PeliculaIndividual pelicula={pelicula} key={pelicula.id} />
        ))}
      </div>
    </ListadoGenerico>
  );
};

export default ListadoPeliculas;

interface listadoPeliculasProps {
  peliculas?: pelicula[];
}
