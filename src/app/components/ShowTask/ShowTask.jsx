import "./ShowTask.css";
import { useRef } from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from "react-router-dom";

export default function ShowTask(props) {
    const [task, setTask] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`http://localhost:3000/tasks/task/${id}`)
                setTask(response.data)
            }   catch (err) {
                console.error(err)
            }
        })()
    }, []);

    const handleDelete = async(id) => {
        try {
            await axios.delete(`http://localhost:3000/tasks/task/${id}`, {
                method: "DELETE"
            })
            navigate("/");
        }   catch (err) {
            console.log(err)
        }
    };
    
    return (
        <main>
            <div>
                <h1>This is the show task component</h1>
                <h2>Superman</h2>
            </div>
            <div className="list">
                <div className="task">
                    <ul>
                        <li>Type: {task.type}</li>
                        <li>Summary: {task.summary}</li>
                        <li>Status: {task.status}</li>
                        <li>Assignee: {task.assignee}</li>
                        <li>Due Date: {task.dueDate}</li>
                        <li>Priority: {task.priority}</li>
                    </ul>
                </div>
            </div>
            <div>
                <Link to={`/edit/task/${id}`} state={task}>Edit</Link>
                <button onClick={() => handleDelete(task._id)}>Delete Task</button>
            </div>
        </main>
    );
};