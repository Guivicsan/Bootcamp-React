import { useEffect, useState } from "react";
import api from "../api";

function Musicas() {

    const [listaMusica, setListaMusica] = useState([]);

    useEffect(() => {
        api.get()
        .then((res) => {
            console.log(res.data);
            setListaMusica(res.data);
            console.log("Lista de musica")
        })
        .catch((erro) => {
            console.log(erro);
        });
    }, []) 

    // function teste(){
    //     api.get()
    //     .then((res) => {
    //         console.log(res);
    //         setListaMusica(res.data);
    //     })
    //     .catch((erro) => {
    //         console.log(erro);
    //     });
    // }

    return (
        <>
            <h1>Titulo</h1>
            {listaMusica.map((musicas, temanho) => (
                <div key={musicas.id}>
                    <h1>{musicas.nome}</h1>
                </div>
            ))}
            {/* <button onClick={teste}>Teste</button> */}
        </>
    )
}

export default Musicas