import React from 'react'

export default function SignUpModal() {
  return (
    <>
        <div className="position-fixed top-0 vw-100 vh-100">
            <div className="w-100 h-100 bg-dark opacity-75">
                <div className="position-absolute top-50 start-50 translate-middle" style={{ minWidth:"400px" }}>
                    <div className="modal-dialog">
                        <div className="modal-content bg-light">
                            <div className="modal-header">
                                <h5 className="modal-title">Sign Up</h5>
                                <button className="btn-close"></button>
                            </div>
                            <div className="modal-body">
                                <form className="sign-up-form">
                                    <div className="mb-3">
                                        <label htmlFor="signUpEmail">Email adress</label>
                                        <input
                                            name="email"
                                            required
                                            type="mail" 
                                            className="form-control"
                                            id="signUpEmail" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="signUpPdw">Password</label>
                                        <input
                                            name="pwd"
                                            required
                                            type="password" 
                                            className="form-control"
                                            id="signUpPdw" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="signUpPdw">Repeat password</label>
                                        <input
                                            name="pwd"
                                            required
                                            type="password" 
                                            className="form-control"
                                            id="signUpPdw" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
