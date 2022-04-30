import "./EditTask.css";
import axios from "axios";
import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";


export default function EditTask(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const [task, setTask] = useState([]);
    const [summary, setSummary] = useState(location.state.summary);
    const [type, setType] = useState(location.state.type);
    const [status, setStatus] = useState(location.state.status);
    const [assignee, setAssignee] = useState(location.state.assignee);
    const [dueDate, setDueDate] = useState(location.state.dueDate);
    const [priority, setPriority] = useState(location.state.priority);
    
    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            console.log("Clicked on Update Task button")
            const updatedTask = {
                summary : summary,
                type : type,
                status : status,
                assignee : assignee,
                dueDate : dueDate,
                priority : priority
            }
            const response = await axios.put(`http://localhost:3000/tasks/edit/task/${location.state._id}`, updatedTask)
            navigate(`/task/${location.state._id}`)
        }   catch (err) {
            console.log(err)
        }
    };

    return (
        <main>
            <form>
                <fieldset>
                    <div className="card index-card border border-3">
                        <div className="card-header">
                            <h1>Edit Task</h1>
                        </div>
                        <div className="mb-3 card-body">
                            <ul>
                                <li>
                                    <label for="summary" className="form-label">Summary</label>
                                    <input type="text" className="form-control" name="summary" id="type" onChange={e => setSummary(e.target.value)} value={summary} />
                                </li>
                                <li>
                                    <label for="type" className="form-label">Type</label>
                                    <select className="form-select" name="type" id="type" onChange={e => setType(e.target.value)} value={type}>
                                        <option selected>Choose...</option>
                                        <option value="Frontend">Frontend</option>
                                        <option value="Backend">Backend</option>
                                        <option value="Deployment">Deployment</option>
                                        <option value="UI/UX">UI/UX</option>
                                    </select>
                                </li>
                                <li>
                                    <label for="status" className="form-label">Status</label>
                                    <select className="form-select" name="status" id="status" onChange={e => setStatus(e.target.value)} value={status}>
                                        <option value="TO DO">TO DO</option>
                                        <option value="IN PROGRESS">IN PROGRESS</option>
                                        <option value="IN REVIEW">IN REVIEW</option>
                                        <option value="DONE">DONE</option>
                                    </select>
                                </li>
                                <li>
                                    <label for="assignee" className="form-label">Assignee</label>
                                    <select className="form-select" name="assignee" id="assignee" onChange={e => setAssignee(e.target.value)} value={assignee}>
                                        <option selected>Choose...</option>
                                        <option value="Arthur Bernier Jr.">Arthur Bernier Jr. aka Master Splinter</option>
                                        <option value="Charlie Furman">Charlie Furman</option>
                                        <option value="Dan Nguyen">Dan Nguyen aka Danimal</option>
                                        <option value="Farah Yeaznee">Farah Yeaznee</option>
                                        <option value="Gerimae Oliva">Gerimae Oliva</option>
                                        <option value="Julio Colon">Julio Colon</option>
                                        <option value="Lucas Carlos">Lucas Carlos</option>
                                        <option value="Michael Del Castillo">Michael Del Castillo</option>
                                        <option value="Ray Kim">Ray Kim</option>
                                        <option value="Teo Marcelo">Teo Marcelo</option>
                                    </select>
                                </li>
                                <li>
                                    <label for="dueDate" className="form-label">Due Date</label>
                                    <input type="text" name="dueDate" id="inputdate"placeholder="yyyy/mm/dd" onChange={e => setDueDate(e.target.value)} value={dueDate} />
                                </li>
                                <li>
                                    <label for="priority" className="form-label">Priority</label>
                                    <select className="form-select" name="priority" id="priority" onChange={e => setPriority(e.target.value)} value={priority}>
                                        <option selected>Choose...</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                </fieldset>
                <div id="button">
                    <button onClick={handleSubmit} className="btn btn-outline-primary">Update Task</button>
                </div>
            </form>
        </main>
    );
};