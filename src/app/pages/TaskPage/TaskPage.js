import { useState, useEffect, useRef } from 'react';
import styles from "./TaskPage.css";
import { Link, useNavigate } from 'react-router-dom';
import Task from "../../features/task/Task";

export default function TaskPage() {
    return (
        <main className={styles.TaskPage}>
            <Task />
        </main>
    );
};