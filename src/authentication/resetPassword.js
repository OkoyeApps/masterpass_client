import React from 'react'

const ResetPassword = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="login-form mt5">
                            <div className="font32">Reset Password</div>
                            <div>Provide your email address and a recovery link will be sent to your email to reset your password</div>
                            <form action="">
                                <section className="input-wrapper">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" />
                                </section>
                                <div className="mt2">
                                    <button className="button" type="submit">Start Recovery</button>
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
export default ResetPassword