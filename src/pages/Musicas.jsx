import { useEffect, useState } from "react";
import "../html-css-template/css/style.css";

import api from "../api"; // importando a instância do Axios de "api.js"
import Musica from "../components/Musica";

function Musicas() {
  const [listaMusicas, setListaMusicas] = useState([]); // criando estado de vetor para uma lista de músicas

  useEffect(() => {
    api
      .get()
      .then((res) => {
        console.log(res.data);
        setListaMusicas(res.data);
        console.log("essa e a lista de musicas", listaMusicas);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <>
      <Musica />
    </>
  )
}

export default Musicas;
