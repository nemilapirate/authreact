import React, {useContext} from 'react'
import {UserContext} from '../Context/userContext'
import {Link} from "react-router-dom"

export default function navbar() {

  const{toggleModals} = useContext(UserContext)

  return (
    <nav className="navbar navbar-light bg-light px-4">
        <Link to="/" className='navbar-brand'>
            AuthJS
        </Link>
        <div>
            <button 
              onClick={() => toggleModals("signUp")}
              className="btn btn-primary">Sign UP</button>
            <button 
              onClick={() => toggleModals("signIn")}
              className="btn btn-primary ms-2">Sign IN</button>
            <button 
              onClick={() => toggleModals("close")}
              className="btn btn-danger ms-2">Log OUT</button>
        </div>
    </nav>
  )
}
