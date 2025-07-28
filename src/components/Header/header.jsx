import "../../App.css"
import "./header.css"
import Card from "./card/card"
import Menu from "./menu/menu";

function Header() {

    return (
        <header>
            <Card 
                fotoPerfil="FotoDePerfil.jpeg"
                nome="Nathan"
                descricao="Desenvolvedor"
            />
            <Menu />
        </header>
    )
};

export default Header;