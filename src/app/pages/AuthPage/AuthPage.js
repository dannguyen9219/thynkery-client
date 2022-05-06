import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";
import logo from "../../../images/thynkery-logo-1.png"
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(true);

    return (
        <main className="titleCard">
            <div className="titleText">
                <img src={logo}></img>
                <h3>A Project Management App for Software Developers</h3> 
            </div>
            
            <button className="btn btn-outline-secondary" onClick={() => setShowLogin(!showLogin) }>{ showLogin ? 'SIGN UP' : 'LOG IN'}</button>
            {
                showLogin?
                <LoginForm setUser={setUser} />
                :
                <SignUpForm setUser={setUser} />
            }
        </main>
    );
};