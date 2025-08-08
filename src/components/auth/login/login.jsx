import { cache, useState } from "react"
import Usuarios from "../../../DB/users";
import "./login.css"


function Login() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [estaLogado, setEstaLogado] = useState(false);

    const logar = (e) => {
        e.preventDefault();

        try {
            //const usuario = Usuarios.find((user) => user.email === email);
            const usuario = Usuarios.find((user) => 1 === 1);
            console.log(usuario);        
            
            /*if (usuario.senha === senha) {
                console.log("logado!");
                setEstaLogado(true);
            } else {
                console.log("falha");
                setEstaLogado(false);
            }*/
        } catch (err) {
            console.log("usuario não encontrado")
        }
    }

    return (
        <div className="background">
            <div className="form-container">
                <form id="auth-form" onSubmit={logar}>
                    <div id="form-top">
                        <h1>Login</h1>
                    </div>
                    <div id="form-ipts">
                        <div className='campo'>
                            <div className="ipt">
                                <input
                                    value={email}
                                    type="email"
                                    id="userEmail"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='exemplo@gmail.com'
                                />
                            </div>
                        </div>
                        <div className="campo">
                            <div className="ipt">
                                <input
                                    value={senha}
                                    type="password"
                                    id='password'
                                    onChange={(e) => setSenha(e.target.value)}
                                    placeholder='Senha'
                                />
                            </div>
                        </div>
                    </div>
                    <div id="form-bottom">
                        <button type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login