import './App.css';
import ReactDOM from 'react-dom';
import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Task from "./app/features/task/Task";
import Trello from "./app/features/trello/Trello";
import NewTaskPage from "./app/pages/NewTaskPage/NewTaskPage";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={ <Task /> }></Route>
            <Route path="/trello" element={ <Trello /> }></Route>
            <Route path="/new" element={ <NewTaskPage /> }></Route>
        </Routes>
    );
};