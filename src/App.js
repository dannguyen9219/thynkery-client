import './App.css';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Task from "./app/features/task/Task";

export default function App() {
    return (
        <>
            <main>
                <div>
                    <h1>Thynkery App</h1>
                </div>
                <div>
                    <Task />
                </div>
            </main>
        </>

    )
};