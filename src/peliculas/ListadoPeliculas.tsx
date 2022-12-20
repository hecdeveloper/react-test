import React from "react";
import PeliculaIndividual from "./PeliculaIndividual";
import { pelicula } from "./peliculas.model";
import css from "./ListadoPeliculas.module.css";
import Cargando from "../utils/Cargando";

const ListadoPeliculas = (props: listadoPelliculasProps) => {
  if(!props.peliculas){
    return <Cargando/>
  }else if (props.peliculas.length === 0) {
    return <p>No hay peliculas</p>;
  }else {
    return(
      <div className={css.div}>
        {props.peliculas.map((pelicula) => (
          <PeliculaIndividual pelicula={pelicula} key={pelicula.id} />
        ))}
      </div>
    )
  }
};

export default ListadoPeliculas;

interface listadoPelliculasProps {
  peliculas?: pelicula[];
}
