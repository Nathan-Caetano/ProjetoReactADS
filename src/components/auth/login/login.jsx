import "./login.css"


function Login() {

    return (
        <div className="background">
            <div className="form-container">
                <form id="auth-form">
                    <div id="form-top">
                        <h1>Login</h1>
                    </div>
                    <div id="form-ipts">
                        <div className='campo'>
                            <div className="ipt">
                                <input
                                    type="email"
                                    id="userEmail"
                                    placeholder='exemplo@gmail.com'
                                />
                            </div>
                        </div>
                        <div className="campo">
                            <div className="ipt">
                                <input
                                    type="password"
                                    id='password'
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