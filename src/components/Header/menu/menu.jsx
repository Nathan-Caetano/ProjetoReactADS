import "../../../App.css"
import "./menu.css"
import { Link } from "react-router-dom";

function Menu() {

    return (
        <div className="menu">
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Produtos</a></li>
                    <li><a href="">Contato</a></li>
                    <li><a href="">CalcularDisconto</a></li>
                </ul>
            </div>
        </div>
    )
};

export default Menu;