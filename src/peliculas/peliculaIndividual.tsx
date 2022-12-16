import React from 'react'
import { pelicula } from './peliculas.model';

const peliculaIndividual = (props: peliculaIndividualProps) => {
  return (
    <div>peliculaIndividual</div>
  )
}

export default peliculaIndividual

interface peliculaIndividualProps {
    pelicula: pelicula;
}