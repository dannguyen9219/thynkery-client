import { useState, useEffect, useRef } from 'react';
import styles from "./TaskPage.module.css";
import { Link, useNavigate } from 'react-router-dom';
import Header from "../../components/Header/Header";
import Task from "../../features/task/Task";

export default function TaskPage() {
    return (
        <div>
            <Header />
            <Task />
        </div>
    );
};