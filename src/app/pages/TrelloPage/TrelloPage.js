import { useState, useEffect, useRef } from 'react';
import styles from "./TrelloPage.css";
import { Link, useNavigate } from 'react-router-dom';
import Trello from "../../features/trello/Trello";

export default function TrelloPage() {
    return (
        <main className={styles.TrelloPage}>
            <Trello />
        </main>
    );
};