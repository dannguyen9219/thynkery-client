import "./Task.css";
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Task() {
    const [tasks, setTasks] = useState({});

    useEffect(() => {
        // async () => {
        //     try {
        //         const response = await axios.get(`http://localhost:3000/tasks/table`)
        //         setTasks(response.data)
        //     }   catch (err) {
        //         console.log(err)
        //     }
        // }
        getTask()

    }, []);

    const getTask = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/tasks/table`)
            setTasks(response.data)
        }   catch (err) {
            console.log(err)
        }
    };
    console.log(tasks)
    // console.log(tasks["HIGH"])
    return (
        <>
            <div className="App">
                <div>
                    <h1>This is the Task Page</h1> 
                </div>
                <div className="section" id="high-priority">
                    <h2>High</h2>
                    <div className="list">
                        {
                            tasks["High"] ?
                            tasks["High"].map((item, idx) => {
                                console.log("Hello")
                                return (
                                    <div className="task" key={idx}>
                                        <h2>{item.type} <Link to={`/${item._id}`}>{item.summary}</Link> {item.status} {item.assignee} {item.dueDate} {item.priority}</h2>
                                    </div>
                                )
                            })
                            :
                            ""
                        }
                    </div>
                </div>
                <div className="section" id="medium-priority">
                    <h2>Medium</h2>
                    <div className="list">
                        {
                            tasks["Medium"] ?
                            tasks["Medium"].map((item, idx) => {
                                return (
                                    <div className="task" key={idx}>
                                        <h2>{item.type} <Link to={`/${item._id}`}>{item.summary}</Link> {item.status} {item.assignee} {item.dueDate} {item.priority}</h2>
                                    </div>
                                )
                            })
                            :
                            ""
                        }
                    </div>
                </div>
                <div className="section" id="low-priority">
                    <h2>Low</h2>
                    <div className="list">
                        {
                            tasks["Low"] ?
                            tasks["Low"].map((item, idx) => {
                                return (
                                    <div className="task" key={idx}>
                                        <h2>{item.type} <Link to={`/${item._id}`}>{item.summary}</Link> {item.status} {item.assignee} {item.dueDate} {item.priority}</h2>
                                    </div>
                                )
                            })
                            :
                            ""
                        }
                    </div>
                </div>
            </div>
        </>
    );
};