import Menu from "../Header/menu/menu";
import "./footer.css"

function Footer() {

    return (
        <footer>
            <div className="footer-top">
                <Menu/>
            </div>
            <div className="footer-bottom">
                <p>Desenvolvido por Nathan - Todos os direitos reservados</p>
            </div>
        </footer>
    )
};

export default Footer;