import "./NewTask.css";
import { useRef } from "react";
import axios from "axios";

export default function NewTask() {
    const summary = useRef();
    const type = useRef();
    const status = useRef();
    const assignee = useRef();
    const dueDate = useRef();
    const priority = useRef();
    
    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            console.log("Click on handle submit")
            const response = await axios.post(`http://localhost:3000/tasks`, {
                summary: summary.current.value,
                type: type.current.value,
                status: status.current.value,
                assignee: assignee.current.value,
                dueDate: dueDate.current.value,
                priority: priority.current.value
            })
        }   catch (err) {
            console.log(err)
        }
    };
    
    return (
        <main id="newtaskmain">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="card index-card border border-3">
                        <div className="card-header">
                            <h1>Add New Task</h1>
                        </div>
                        <div className="mb-3 card-body">
                            <ul>
                                <li>
                                    <label for="summary" className="form-label">Summary</label>
                                    <input type="text" className="form-control"name="summary" id="type" placeholder="Summary" ref={summary}></input>
                                </li>
                                <li>
                                    <label for="type" className="form-label">Type</label>
                                    <select className="form-select" name="type" id="type" ref={type}>
                                        <option selected>Choose...</option>
                                        <option value="Frontend">Frontend</option>
                                        <option value="Backend">Backend</option>
                                        <option value="Deployment">Deployment</option>
                                        <option value="UI/UX">UI/UX</option>
                                    </select>
                                </li>
                                <li>
                                    <label for="status" className="form-label">Status</label>
                                    <select className="form-select" name="status" id="status" ref={status}>
                                        <option value="TO DO">TO DO</option>
                                        <option value="IN PROGRESS">IN PROGRESS</option>
                                        <option value="IN REVIEW">IN REVIEW</option>
                                        <option value="DONE">DONE</option>
                                    </select>
                                </li>
                                <li>
                                    <label for="assignee" className="form-label">Assignee</label>
                                    <select className="form-select" name="assignee" id="assignee" ref={assignee}>
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
                                    <input type="text" name="dueDate" id="inputdate"placeholder="yyyy/mm/dd" ref={dueDate}></input>
                                </li>
                                <li>
                                    <label for="priority" className="form-label">Priority</label>
                                    <select className="form-select" name="priority" id="priority" ref={priority}>
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
                    <input type="submit" className="btn btn-outline-primary" value="Create New Task"/>
                </div>
            </form>
        </main>
    );
};