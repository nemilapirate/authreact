import React from 'react'
import {Link} from "react-router-dom"

export default function navbar() {
  return (
    <nav className="navbar navbar-light bg-light px-4">
        <Link to="/" className='navbar-brand'>
            AuthJS
        </Link>
        <div>
            <button className="btn btn-primary">Sign UP</button>
            <button className="btn btn-primary ms-2">Sign IN</button>
            <button className="btn btn-danger ms-2">Log OUT</button>
        </div>
    </nav>
  )
}
