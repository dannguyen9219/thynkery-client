import { useState, useEffect, useRef } from 'react';
import styles from "./NewTaskPage.css";
import { Link, useNavigate } from 'react-router-dom';
import NewTask from "../../components/NewTask/NewTask";

export default function NewTaskPage() {
    return (
        <main className={styles.NewTaskPage}>
            <div>
                <NewTask />
            </div>
        </main>
    );
};