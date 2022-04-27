import { useState, useEffect, useRef } from 'react';
import styles from "./ShowTaskPage.css";
import { Link, useNavigate } from 'react-router-dom';
import ShowTask from "../../components/ShowTask/ShowTask";

export default function ShowTaskPage() {
    return (
        <main className={styles.ShowTaskPage}>
            <h1>This is the Show Task Page</h1>
        </main>
    );
};