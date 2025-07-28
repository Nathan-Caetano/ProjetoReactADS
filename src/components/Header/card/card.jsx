import "../../../App.css"
import "./card.css"

function Card(props) {

    return (
        <div className="card">
            <img src={props.fotoPerfil} />
            <div>
                <h1>{props.nome}</h1>
                <p>{props.descricao}</p>
            </div>
        </div>
    )
};

export default Card;