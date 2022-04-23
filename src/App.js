import './App.css';
import ReactDOM from 'react-dom';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Task from "./app/features/task/Task";
import Trello from "./app/features/trello/Trello";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={ <Task /> }></Route>
            <Route path="/trello" element={ <Trello /> }></Route>
        </Routes>
    )
};