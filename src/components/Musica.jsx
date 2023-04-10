import React from "react";
import ItemMusica from "./ItemMusica";
import Menu from "./Menu";

function Musica() {
  return (
    <>
      <Menu />
      <div class="container">
        <div class="filter">
          <button class="btn">Adicionar</button>
        </div>
      </div>

      <div class="container">
        <div class="music-boxes">
          <ItemMusica />
          <ItemMusica />
          <ItemMusica />
        </div>
      </div>
    </>
  );
}

export default Musica;
