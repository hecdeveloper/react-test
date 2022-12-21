import IndiceGeneros from "./generos/IndiceGeneros";
import LandingPage from "./LandingPage";

const rutas = [
  { path: "/", componente: LandingPage, exact: true },
  { path: "/generos", componente: IndiceGeneros },
];

export default rutas;
