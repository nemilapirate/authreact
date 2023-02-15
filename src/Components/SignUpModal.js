import React, {useContext} from 'react'
import{UserContext} from "../Context/userContext"

export default function SignUpModal() {

    const {modalState, toggleModals} = useContext(UserContext)


    return (
        <>
            {modalState.signUpModal && (
                <div className="position-fixed top-0 vw-100 vh-100">
                    <div 
                        onClick={() => toggleModals("close")} 
                        className="w-100 h-100 bg-dark opacity-75">
                    </div>
                    <div className="position-absolute top-50 start-50 translate-middle" 
                        style={{ minWidth:"400px" }}>
                        <div className="modal-dialog">
                            <div className="modal-content bg-light p-5">
                                <div className="modal-header">
                                    <h5 className="modal-title">Sign Up</h5>
                                    <button
                                        onClick={() => toggleModals("close")} 
                                        className="btn-close">
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form className="sign-up-form">
                                        <div className="mb-3">
                                            <label htmlFor="signUpEmail"className='form-label'>Email adress</label>
                                            <input
                                                name="email"
                                                required
                                                type="mail" 
                                                className="form-control"
                                                id="signUpEmail" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="signUpPdw"className='form-label'>Password</label>
                                            <input
                                                name="pwd"
                                                required
                                                type="password" 
                                                className="form-control"
                                                id="signUpPdw" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="signUpPdw"className='form-label'>Repeat password</label>
                                            <input
                                                name="pwd"
                                                required
                                                type="password" 
                                                className="form-control"
                                                id="signUpPdw" />
                                                <p className="text-danger mt-1"></p>
                                        </div>
                                        <button className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            )}
        </>
    )
}
