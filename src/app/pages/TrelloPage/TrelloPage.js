import { useState, useEffect, useRef } from 'react';
import styles from "./TrelloPage.module.css";
import { Link, useNavigate } from 'react-router-dom';
import Header from "../../components/Header/Header";
import Trello from "../../features/trello/Trello";

export default function TrelloPage() {
    return (
        <div>
            <Header />
            <Trello />
        </div>
    );
};