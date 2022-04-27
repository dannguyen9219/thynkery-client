import { useState, useEffect, useRef } from 'react';
import styles from "./TaskPage.module.css";
import { Link, useNavigate } from 'react-router-dom';
import Task from "../../features/task/Task";

export default function TaskPage() {
    return (
        <div>
            <Task />
        </div>
    );
};