import styles from "./ShowTask.css";
import { useRef } from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export default function ShowTask(props) {
    const [task, setTask] = useState([]);
    const { id } = useParams();
    console.log(id)

    const getTask = async() => {
        try {
            const response = await axios.get(`http://localhost:3000/tasks/task/${id}`)
            setTask(response.data)
        }   catch (err) {
            console.error(err)
        }
    };

    const deleteTask = async() => {
        try {
            await axios.delete(`http://localhost:3000/tasks/task/${id}`)
            setTask("Delete successful")
        }   catch (err) {
            console.log(err)
        }
    };

    // deleteTask() {
    //     axios.delete(`http://localhost:3000/tasks/task/${id}`)
    //         .then(() => this.setTask({ status: 'Delete successful' }));
    // }

    useEffect(() => {
        getTask()
    }, []);
    
    return (
        <main className={styles.ShowTask}>
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
                {/* <form action={`/task/${id}_method=DELETE`}><input type="submit" value="Delete Task"/></form> */}
                <button onClick={() => {deleteTask(task)}}>Delete Task</button>
            </div>
        </main>
    );
};