var container = document.getElementById("root");

function Participante(props) {
    
    const [numero, setNumero] = React.useState(0)

    function votar() {
        setNumero(numero + 1);
    }

    return (
        <>
            <h1>{props.nome}</h1>
            <h2>{numero}</h2>
            <button onClick={votar}>Votar</button>
        </>
    )
}

function Votacao() {
    return (
        <>
        <Participante nome="Méqui"/>
        <Participante nome="Bks"/>
        <Participante nome="Papais"/>
        </>
    )
}

ReactDOM.createRoot(container).render(<Votacao/>);



var titulo = document.createElement("h1");
titulo.innerHTML = "Titulo inserido pelo javascript!";
container.appendChild(titulo);

function Titulo(props) {
    return (
        <React.Fragment>
            <h1>{props.text}</h1>
            <p>{props.subtitulo}</p>
        </React.Fragment>
    )
}

function Titulos() {
    return (
        <>
            <Titulo text="Minha primeira props" subtitulo="isso é um subtitulo"/>
            <Titulo text="Minha segunda props"/>
            <Titulo text="Minha terceira props"/>
        </>
    )
}
