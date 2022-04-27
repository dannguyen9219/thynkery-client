import { useState, useEffect, useRef } from 'react';
import styles from "./NewTaskPage.module.css";
import { Link, useNavigate } from 'react-router-dom';
import NewTask from "../../components/NewTask/NewTask";

export default function NewTaskPage() {
    return (
        <div>
            <NewTask />
        </div>
    )
};