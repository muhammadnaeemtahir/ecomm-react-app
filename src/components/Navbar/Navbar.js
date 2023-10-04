import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import logo from './logo.png';

export default function Navbar({ handlesetsearch, handlesetcategoryvalue, handleclearfilter }) {

  return (
    <>
      <div className="navbar justify-content-evenly position-sticky top-0 d-flex">
        <div className="d-flex align-items-center">
          <img src={logo} alt="logo" className="px-4" />
          <Link onClick={handleclearfilter} to='/' style={{ textDecoration: "none", color: "white", fontFamily: "Lucida handwriting,Time New Roman" }}><h3 className="navbarHeading">Humari Dukaan</h3></Link>
        </div>
        <div className="d-flex align-items-center border-bottom border-light">
          <input onChange={handlesetsearch} className=" mx-3 bg-transparent border-0 search" id="search" style={{ height: "30px", width: "" }} placeholder="Seach items" />
          <h4><i className="bi bi-search"></i></h4>
        </div>
        <div className="d-flex align-items-center">
          <Link to="/add-product" className="mx-2" style={{ textDecoration: "none", color: "white" }}>
            <i class="bi bi-bag-plus fs-1"></i>
          </Link>
          <Link to="/checkout/info" className="mx-2" style={{ textDecoration: "none", color: "white" }}>
            <i className="bi bi-cart3 fs-1"></i>
          </Link>
          <Link to="/login" className="mx-2" style={{ textDecoration: "none", color: "white" }}>
            <i class="bi bi-person-circle fs-1"></i>
          </Link>
        </div>
      </div >
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container mt-0">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center justify-content-evenly" style={{ paddingLeft: '1rem', paddingRight: '1rem', width: "100%" }}>
              <li className="nav-item">
                <div className="nav-link fs-5 smnvit" onClick={handlesetcategoryvalue} >Agriculture</div>
              </li>
              <li className="nav-item">
                <div className="nav-link fs-5 smnvit" aria-current="page" onClick={handlesetcategoryvalue}>Sports</div>
              </li>
              <li className="nav-item">
                <div className="nav-link fs-5 smnvit" onClick={handlesetcategoryvalue}>Manufacturing</div>
              </li>
              <li className="nav-item">
                <div className="nav-link fs-5 smnvit" onClick={handlesetcategoryvalue}>Services</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}














