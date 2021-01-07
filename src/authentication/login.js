import React from 'react'

const Login = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="login-form mt5">
                            <div className="font32">Mastapass Login</div>
                            <form action="">
                                <section className="input-wrapper">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" />
                                </section>
                                <section className="input-wrapper mt1">
                                    <label for="password">Password</label>
                                    <input type="password" id="password" />
                                </section>
                                <div className="mt2">
                                    <button className="button" type="submit">Log into your account</button>
                                </div>
                                <div className="mt2">
                                    <a href="#" className="text-decoration-none link-color">Reset password</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </section>
    )
}

export default Login