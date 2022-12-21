import { useEffect, useState } from "react";
import "./App.css";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { landingPageDTO } from "./peliculas/peliculas.model";
import Menu from "./utils/Menu";
import IndiceGeneros from "./generos/IndiceGeneros";
function App() {


  return (
    <><BrowserRouter>
      <Menu />
      <div className="container">
        
          <Switch>
            <Route exact path="/">
         
            </Route>
            <Route path="/generos">
            <IndiceGeneros/>
          </Route>
          </Switch>
      </div>
        </BrowserRouter>
    </>
  );
}

export default App;
