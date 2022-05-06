import styles from "./TaskPage.css";
import Task from "../../features/task/Task";

export default function TaskPage() {
    return (
        <main className={styles.TaskPage}>
            <Task />
        </main>
    );
};