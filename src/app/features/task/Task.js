import "./Task.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Task() {
    const [tasks, setTasks] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`https://thynkery.herokuapp.com/tasks/table`)
                setTasks(response.data)
            }   catch (err) {
                console.log(err)
            }
        })()

    }, []);
    
    return (
        <main className="taskApp">
            <div className="taskContainer">
                <h1>Your Work</h1>
                <div className="taskSection" id="high-priority">
                    <h2>High</h2>
                    <div className="taskList">
                        <div id="taskDescription">
                            <table className="table">
                                <thead>
                                    <tr className="taskTable">
                                        <th scope="col">Type</th>
                                        <th scope="col">Summary</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Assignee</th>
                                        <th scope="col">Due Date</th>
                                        <th scope="col">Priority</th>
                                    </tr>
                                </thead>
                            {
                                tasks["High"] ?
                                tasks["High"].map((item, idx) => {
                                    console.log("Hello")
                                    return (
                                        <tbody key={idx}>
                                            <tr className="taskTable">
                                                <td scope="row">{item.type}</td>
                                                <td><Link to={`/task/${item._id}`}>{item.summary}</Link></td>
                                                <td>{item.status}</td>
                                                <td>{item.assignee}</td>
                                                <td>{item.dueDate}</td>
                                                <td>{item.priority}</td>
                                            </tr>
                                        </tbody>
                                    
                                    )
                                })
                                :
                                ""
                            }
                            </table>
                        </div>
                    </div>
                </div>
                <div className="taskSection" id="medium-priority">
                    <h2>Medium</h2>
                    <div className="taskList">
                        <div id="taskDescription">
                            <table className="table">
                                <thead>
                                    <tr className="taskTable">
                                        <th scope="col">Type</th>
                                        <th scope="col">Summary</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Assignee</th>
                                        <th scope="col">Due Date</th>
                                        <th scope="col">Priority</th>
                                    </tr>
                                </thead>
                            {
                                tasks["Medium"] ?
                                tasks["Medium"].map((item, idx) => {
                                    return (
                                        <tbody key={idx}>
                                            <tr className="taskTable">
                                                <th scope="row">{item.type}</th>
                                                <td><Link to={`/task/${item._id}`}>{item.summary}</Link></td>
                                                <td>{item.status}</td>
                                                <td>{item.assignee}</td>
                                                <td>{item.dueDate}</td>
                                                <td>{item.priority}</td>
                                            </tr>
                                        </tbody>
                                            
                                    
                                    )
                                })
                                :
                                ""
                            }
                            </table>
                        </div>
                    </div>
                </div>
                <div className="taskSection" id="low-priority">
                    <h2>Low</h2>
                    <div className="taskList">
                    <div id="taskDescription">
                            <table className="table">
                                <thead>
                                    <tr className="taskTable">
                                        <th scope="col">Type</th>
                                        <th scope="col">Summary</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Assignee</th>
                                        <th scope="col">Due Date</th>
                                        <th scope="col">Priority</th>
                                    </tr>
                                </thead>
                            {
                                tasks["Low"] ?
                                tasks["Low"].map((item, idx) => {
                                    return (
                                        <tbody key={idx}>
                                            <tr className="taskTable">
                                                <th scope="row">{item.type}</th>
                                                <td><Link to={`/task/${item._id}`}>{item.summary}</Link></td>
                                                <td>{item.status}</td>
                                                <td>{item.assignee}</td>
                                                <td>{item.dueDate}</td>
                                                <td>{item.priority}</td>
                                            </tr>
                                        </tbody>
                                    )
                                })
                                :
                                ""
                            }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};