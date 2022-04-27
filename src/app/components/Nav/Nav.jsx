import React from "react";
import styles from "./Nav.css";
import logo from "../../../images/thynkery-logo-3.png"

export default function Nav() {
    return (
        <main className={styles.Nav}>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><img src={logo} id="logo" alt="thynkery logo"></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Your Work</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">People</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/new">Create</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">More</a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="/about">About</a></li>
                                    <li><a class="dropdown-item" href="https://github.com/dannguyen9219/thynkery-client">GitHub</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </main>
    );
};