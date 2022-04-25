import React from "react";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <div>
            <header>
                <div id="main-nav-bar">
                    <nav>
                        <ul id="nav-bar-list">
                            <li id="nav-bar-regular-btn">
                                <a href="/"><img src="../../../public/thynkery-logo-3.png" alt="thynkery logo"></img></a>
                            </li>
                            <li id="nav-bar-regular-btn">
                                <a>Your Work</a>
                            </li>
                            <li id="nav-bar-regular-btn">
                                <a>Projects</a>
                            </li>
                            <li id="nav-bar-regular-btn">
                                <a>People</a>
                            </li>
                            <li id="nav-bar-create-btn">
                                <button>Create</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};