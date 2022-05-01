import "./Trello.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Trello(props) {
    const [tasks, setTasks] = useState([]);
    const [buttonPressed, setButtonPressed] = useState(false);


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
            const response = await axios.put(`http://localhost:3000/tasks/${id}`, {
                status: statusChange
            })
            if (response.status === 200) {
                setButtonPressed(!buttonPressed)
            }
        }   catch (err) {
            console.log(err)
        }
    };
    
    return (
        <main className="trelloApp">
            <div className="trelloContainer">
                <div id="to-do" className="trelloSection">
                    <h2 className="taskHeaderTodo">TO-DO'S</h2>
                    <div className="trelloList">
                        {
                            tasks["TO DO"] ?
                            tasks["TO DO"].map((item, idx) => {
                                return (
                                    <div className="trelloTask" key={idx}>
                                        <Link to={`/task/${item._id}`} className="taskLabel">{item.summary}</Link>
                                        <div>
                                            <button onClick={() => {handleClick("IN PROGRESS", item._id)}} className="btn btn-outline-info">IN PROGRESS</button>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            ""
                        }
                    </div>
                </div>
                <div id="in-progress" className="trelloSection">
                    <h2 className="taskHeaderMiddle">IN PROGRESS</h2>
                    <div className="trelloList">
                        {
                            tasks["IN PROGRESS"] ?
                            tasks["IN PROGRESS"].map((item, idx) => {
                                return (
                                    <div className="trelloTask" key={idx}>
                                        <Link to={`/task/${item._id}`} className="taskLabel">{item.summary}</Link>
                                        <div>
                                            <button onClick={() => {handleClick("TO DO", item._id)}} className="btn btn-outline-info">TO DO</button>
                                            <button onClick={() => {handleClick("IN REVIEW", item._id)}} className="btn btn-outline-info">IN REVIEW</button>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            ""
                        }
                    </div>
                </div>
                <div id="in-review" className="trelloSection">
                    <h2 className="taskHeaderMiddle">IN REVIEW</h2>
                    <div className="trelloList">
                        {
                            tasks["IN REVIEW"] ?
                            tasks["IN REVIEW"].map((item, idx) => {
                                return (
                                    <div className="trelloTask" key={idx}>
                                        <Link to={`/task/${item._id}`} className="taskLabel">{item.summary}</Link>
                                        <div>
                                            <button onClick={() => {handleClick("IN PROGRESS", item._id)}} className="btn btn-outline-info">IN PROGRESS</button>
                                            <button onClick={() => {handleClick("DONE", item._id)}} className="btn btn-outline-info">DONE</button>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            ""
                        }
                    </div>
                </div>
                <div id="done" className="trelloSection">
                    <h2 className="taskHeaderDone">DONE</h2>
                    <div className="trelloList">
                        {
                            tasks["DONE"] ?
                            tasks["DONE"].map((item, idx) => {
                                return (
                                    <div className="trelloTask" key={idx}>
                                        <Link to={`/task/${item._id}`} className="taskLabel">{item.summary}</Link>
                                        <div>
                                            <button onClick={() => {handleClick("IN REVIEW", item._id)}} className="btn btn-outline-info">IN REVIEW</button>
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
        </main>
    );
};