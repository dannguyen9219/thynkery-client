import styles from "./ShowTask.css";
import { useRef } from "react";
import axios from "axios";
import { useState, useEffect } from 'react';

export default function ShowTask() {
    return (
        <main className={styles.ShowTask}>
            <div>
                <h1>This is the show task component</h1>
            </div>
        </main>
    );
};