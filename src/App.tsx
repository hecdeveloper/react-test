import { useEffect, useState } from "react";
import "./App.css";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";

import { landingPageDTO } from "./peliculas/peliculas.model";
import Menu from "./utils/Menu";
function App() {
  const [peliculas, setPeliculas] = useState<landingPageDTO>({});
  useEffect(() => {
    const timerId = setTimeout(() => {
      setPeliculas({
        enCartelera: [
          {
            id: 1,
            titulo: "Spiderman",
            poster:
              "https://cdn.shopify.com/s/files/1/0265/2769/4934/products/spiderman_ver1_xxlg_1024x1024@2x.jpg?v=1628007516",
          },
          {
            id: 2,
            titulo: "Moana",
            poster: "https://m.media-amazon.com/images/I/618d8ue5SmL._AC_.jpg",
          },
        ],
        proximosEstrenos: [
          {
            id: 3,
            titulo: "Soul",
            poster:
              "https://lumiere-a.akamaihd.net/v1/images/p_soul_disneyplus_v2_20907_764da65d.jpeg",
          },
        ],
      });
    }, 500);
    return () => clearTimeout(timerId);
  });

  return (
    <>
      <Menu />
      <div className="container">
        <h3>En Cartelera</h3>
        <ListadoPeliculas peliculas={peliculas.enCartelera} />
        <h3>Estrenos</h3>
        <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
      </div>
    </>
  );
}

export default App;
