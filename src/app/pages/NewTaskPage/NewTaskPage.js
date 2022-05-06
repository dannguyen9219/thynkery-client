import styles from "./NewTaskPage.css";
import NewTask from "../../components/NewTask/NewTask";

export default function NewTaskPage() {
    return (
        <main className={styles.NewTaskPage}>
            <div>
                <NewTask />
            </div>
        </main>
    );
};