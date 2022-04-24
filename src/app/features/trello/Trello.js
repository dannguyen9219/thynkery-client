import "./Trello.css";
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Trello() {
    const [tasks, setTasks] = useState([]);
    const [buttonPressed, setButtonPressed] = useState(false);
    const entry = useRef();

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`http://localhost:3000/tasks/trello`)
                setTasks(response.data)
            }   catch (err) {
                console.log(err)
            }
        })()
    }, [buttonPressed]);

    const handleClick = async (statusChange, id) => {
        try {
            const response = await axios.put(`http://localhost:3000/tasks/trello/${id}`, {
                status: statusChange
            })
            if (response.status === 200) {
                setButtonPressed(!buttonPressed)
            }
        }   catch (err) {
            console.log(err)
        }
    };
    console.log(tasks)
    
    return (
        <>
            <div>
                <h1>This is the Trello Page</h1>
            </div>
            <div className="container">
                <div id="to-do" className="section">
                    <h2>TO-DO'S</h2>
                    <div className="list">
                        {
                            tasks["TO DO"] ?
                            tasks["TO DO"].map((item, idx) => {
                                return (
                                    <div className="task" key={idx}>
                                        <Link to={`/${item._id}`}>{item.summary}</Link>
                                        <div>
                                            <button onClick={() => {handleClick("IN PROGRESS", item._id)}} className="button">IN PROGRESS</button>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            ""
                        }
                    </div>
                </div>
                <div id="in-progress" className="section">
                    <h2>IN PROGRESS</h2>
                    <div className="list">
                        {
                            tasks["IN PROGRESS"] ?
                            tasks["IN PROGRESS"].map((item, idx) => {
                                return (
                                    <div className="task" key={idx}>
                                        <Link to={`/${item._id}`}>{item.summary}</Link>
                                        <div>
                                            <button onClick={() => {handleClick("TO DO", item._id)}} className="button">TO DO</button>
                                            <button onClick={() => {handleClick("IN REVIEW", item._id)}} className="button">IN REVIEW</button>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            ""
                        }
                    </div>
                </div>
                <div id="in-review" className="section">
                    <h2>IN REVIEW</h2>
                    <div className="list">
                        {
                            tasks["IN REVIEW"] ?
                            tasks["IN REVIEW"].map((item, idx) => {
                                return (
                                    <div className="task" key={idx}>
                                        <Link to={`/${item._id}`}>{item.summary}</Link>
                                        <div>
                                            <button onClick={() => {handleClick("IN PROGRESS", item._id)}} className="button">IN PROGRESS</button>
                                            <button onClick={() => {handleClick("DONE", item._id)}} className="button">DONE</button>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            ""
                        }
                    </div>
                </div>
                <div id="done" className="section">
                    <h2>DONE</h2>
                    <div className="list">
                        {
                            tasks["DONE"] ?
                            tasks["DONE"].map((status, idx) => {
                                console.log(status)
                                return (
                                    <div className="task" key={idx}>
                                        <Link to={`/${status._id}`}>{status.summary}</Link>
                                        <div>
                                            <button onClick={() => {handleClick("IN REVIEW", status._id)}} className="button">IN REVIEW</button>
                                        </div>
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