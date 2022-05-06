import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from './app/utilities/users-service';
import AuthPage from './app/pages/AuthPage/AuthPage';
import TaskPage from "./app/pages/TaskPage/TaskPage";
import TrelloPage from "./app/pages/TrelloPage/TrelloPage";
import NewTaskPage from "./app/pages/NewTaskPage/NewTaskPage";
import CalendarPage from './app/pages/CalendarPage/CalendarPage';
import ShowTaskPage from './app/pages/ShowTaskPage/ShowTaskPage';
import AboutPage from "./app/pages/AboutPage/AboutPage";
import EditPage from "./app/pages/EditPage/EditPage";
import PeoplePage from "./app/pages/PeoplePage/PeoplePage";
import Nav from "./app/components/Nav/Nav";

export default function App() {
    const [user, setUser] = useState(getUser());

    return (
        <main>
            <Nav user={user} setUser={setUser} />
            {
                user ?
                <Routes>
                    <Route path="/" element={ <TaskPage /> }></Route>
                    <Route path="/trello" element={ <TrelloPage /> }></Route>
                    <Route path="/new" element={ <NewTaskPage /> }></Route>
                    <Route path="/calendar" element={ <CalendarPage /> }></Route>
                    <Route path="/task/:id" element={ <ShowTaskPage /> }></Route>
                    <Route path="/about" element={ <AboutPage /> }></Route>
                    <Route path="/edit/task/:id" element={ <EditPage /> }></Route>
                    <Route path="/people" element={ <PeoplePage /> }></Route>
                </Routes>
                :
                <AuthPage setUser={setUser} />
            }
        </main>
    );
};