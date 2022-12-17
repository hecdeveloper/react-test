import "./App.css";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import PeliculaIndividual from "./peliculas/PeliculaIndividual";

import { pelicula } from "./peliculas/peliculas.model";
function App() {
  const peliculasEnCartelera: pelicula[] = [
    {
      id: 1,
      titulo: "Spiderman",
      poster:
        "https://cdn.shopify.com/s/files/1/0265/2769/4934/products/spiderman_ver1_xxlg_1024x1024@2x.jpg?v=1628007516",
    },
    {
      id: 2,
      titulo: "Moana",
      poster:
        "https://m.media-amazon.com/images/I/618d8ue5SmL._AC_.jpg",
    },
  ]
  const peliculasProximosEstrenos: pelicula[] = [
    {
      id: 1,
      titulo: "Spiderman",
      poster:
        "https://cdn.shopify.com/s/files/1/0265/2769/4934/products/spiderman_ver1_xxlg_1024x1024@2x.jpg?v=1628007516",
    },
    {
      id: 2,
      titulo: "Moana",
      poster:
        "https://m.media-amazon.com/images/I/618d8ue5SmL._AC_.jpg",
    },
  ]
  // const peliculaPrueba: pelicula = {
  //   id: 1,
  //   titulo: "Spiderman",
  //   poster:
  //     "https://cdn.shopify.com/s/files/1/0265/2769/4934/products/spiderman_ver1_xxlg_1024x1024@2x.jpg?v=1628007516",
  // };
  return (
    <>
      {/* <PeliculaIndividual pelicula={peliculaPrueba} /> */}
      <h3>En Cartelera</h3>
      <ListadoPeliculas peliculas={peliculasEnCartelera}/>
    </>
  );
}

export default App;
