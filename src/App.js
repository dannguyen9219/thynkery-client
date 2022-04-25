import './App.css';
import ReactDOM from 'react-dom';
import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Task from "./app/features/task/Task";
import TaskPage from "./app/pages/TaskPage/TaskPage";
import TrelloPage from "./app/pages/TrelloPage/TrelloPage";
import NewTaskPage from "./app/pages/NewTaskPage/NewTaskPage";
import CalendarPage from './app/pages/CalendarPage/CalendarPage';
import Header from "./app/components/Header/Header"

export default function App() {
    return (
        <Routes>
            <Route path="/" element={ <TaskPage /> }></Route>
            <Route path="/trello" element={ <TrelloPage /> }></Route>
            <Route path="/new" element={ <NewTaskPage /> }></Route>
            <Route path="/calendar" element={ <CalendarPage /> }></Route>
        </Routes>
    );
};