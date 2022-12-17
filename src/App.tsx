import "./App.css";
import PeliculaIndividual from "./peliculas/PeliculaIndividual";

import { pelicula } from "./peliculas/peliculas.model";
function App() {
  const peliculaPrueba: pelicula = {
    id: 1,
    titulo: "Spiderman",
    poster:
      "https://cdn.shopify.com/s/files/1/0265/2769/4934/products/spiderman_ver1_xxlg_1024x1024@2x.jpg?v=1628007516",
  };
  return (
    <>
      <PeliculaIndividual pelicula={peliculaPrueba} />
    </>
  );
}

export default App;
