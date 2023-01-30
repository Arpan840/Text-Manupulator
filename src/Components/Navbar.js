import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}  `} >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/about">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
         
        
       
      </ul>
      <div className ={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.changeMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==="light"?"Enable Dark Mode":"Enable light mode"}</label>
  <button type="button" className="btn btn-primary mx-3" onClick={props.dbMode}>Dark Blue</button>
<button type="button" className="btn btn-secondary mx-3" onClick={props.greyMode}>Dark grey</button>
<button type="button" className="btn btn-success mx-3" onClick={props.gMode}>Green</button>
<button type="button" className="btn btn-danger mx-3" onClick={props.rMode}>Red</button>
<button type="button" className="btn btn-warning mx-3"onClick={props.yMode}>Yellow</button>
<button type="button" className="btn btn-info mx-3" onClick={props.skMode}>Sky Blue</button>
</div>
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes={titel:PropTypes.string, about:PropTypes.string,}
Navbar.defaultProps={
    title:'Set title here',
    about:'Set about here'
}