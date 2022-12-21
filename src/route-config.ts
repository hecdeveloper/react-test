import IndiceGeneros from "./generos/IndiceGeneros";
import LandingPage from "./LandingPage";

const rutas = [
    {path: '/generos', componente: IndiceGeneros},
    {path: '/', componente: LandingPage, excact: true}
];

export default rutas;