import React from "react";
import styles from "./Nav.css";
import logo from "../../../images/thynkery-logo-3.png"
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <main className={styles.Nav}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"><img src={logo} id="logo" alt="thynkery logo"></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Your Work</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Your Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/people" className="nav-link">People</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/new" className="nav-link">Create</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">More</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link to="/about" class="dropdown-item">About</Link>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="https://github.com/dannguyen9219/thynkery-client">GitHub</a>
                                    </li>
                                    <li>
                                        <Link to="trello" className="dropdown-item">The Board</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </main>
    );
};