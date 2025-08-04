import "../../../App.css"
import "./menu.css"
import { Link } from "react-router-dom";

function Menu() {

    return (
        <div className="menu">
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/sobre'>Sobre</Link></li>
                    <li><Link to='/produtos'>Produto</Link></li>
                    <li><Link to='/contato'>Contato</Link></li>
                    <li><Link to='/calcularDisconto'>CalcularDisconto</Link></li>
                </ul>
            </div>
        </div>
    )
};

export default Menu;