import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";

export default function AuthPage({ setUser }) {
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(true);

    return (
        <main>
            <h1>Authorization Page</h1>
            <button onClick={() => setShowLogin(!showLogin) }>{ showLogin ? 'SIGN UP' : 'LOG IN'}</button>
            {
                showLogin?
                <LoginForm setUser={setUser} />
                :
                <SignUpForm setUser={setUser} />
            }
        </main>
    );
};