import "./ShowTask.css";
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
                const response = await axios.get(`https://thynkery.herokuapp.com/tasks/task/${id}`)
                setTask(response.data)
            }   catch (err) {
                console.error(err)
            }
        })()
    }, []);

    const handleDelete = async(id) => {
        try {
            await axios.delete(`https://thynkery.herokuapp.com/tasks/task/${id}`, {
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
                <h2 className="title-summary">{task.summary}</h2>
            </div>
            <div className="list">
                <div className="card">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item" id="list-item">Type: {task.type}</li>
                        <li className="list-group-item" id="list-item">Status: {task.status}</li>
                        <li className="list-group-item" id="list-item">Assignee: {task.assignee}</li>
                        <li className="list-group-item" id="list-item">Due Date: {task.dueDate}</li>
                        <li className="list-group-item" id="list-item">Priority: {task.priority}</li>
                    </ul>
                </div>
            </div>
            <div className="buttons">
                <Link to={`/edit/task/${id}`} state={task} className="btn btn-outline-primary">Edit</Link>
                <button onClick={() => handleDelete(task._id)} className="btn btn-danger">Delete Task</button>
            </div>
        </main>
    );
};