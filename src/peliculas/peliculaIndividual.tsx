import React from "react";
import { pelicula } from "./peliculas.model";

const peliculaIndividual = (props: peliculaIndividualProps) => {
  const construirLink = () => `/pelicula/${props.pelicula.id}`;
  return (
    <div>
      <a href={construirLink()}>
        <img src={props.pelicula.poster} alt="POSTER" />
      </a>
      <p>
        <a href={construirLink()}>{props.pelicula.titulo}</a>
      </p>
    </div>
  );
};

export default peliculaIndividual;

interface peliculaIndividualProps {
  pelicula: pelicula;
}
