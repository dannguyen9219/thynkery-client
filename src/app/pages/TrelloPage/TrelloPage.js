import styles from "./TrelloPage.css";
import Trello from "../../features/trello/Trello";

export default function TrelloPage() {
    return (
        <main className={styles.TrelloPage}>
            <Trello />
        </main>
    );
};