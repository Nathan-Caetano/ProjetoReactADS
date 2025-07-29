import "../../App.css"
import "./header.css"
import Card from "./card/card"
import Menu from "./menu/menu";

function Header() {

    return (
        <header>
            <div className="header-top">
                <Card
                    fotoPerfil="FotoDePerfil.jpeg"
                    nome="Nathan"
                    descricao="Desenvolvedor"
                />
                        <h1 aria-label="Hi! I'm a developer" id="typer">
                            Hi! I'm a&nbsp;<span class="typewriter"></span>
                        </h1>
            </div>
            <div className="header-bottom">
                <Menu />
            </div>
        </header>
    )
};

export default Header;