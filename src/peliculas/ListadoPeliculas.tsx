import React from "react";
import PeliculaIndividual from "./PeliculaIndividual";
import { pelicula } from "./peliculas.model";

const ListadoPeliculas = (props: listadoPelliculasProps) => {
  return (
    <div>
      {props.peliculas.map((pelicula) => (
        <PeliculaIndividual pelicula={pelicula} key={pelicula.id} />
      ))}
    </div>
  );
};

export default ListadoPeliculas;

interface listadoPelliculasProps {
  peliculas: pelicula[];
}
