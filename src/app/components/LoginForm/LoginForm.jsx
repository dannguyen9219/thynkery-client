import { useState } from 'react';
import * as userService from '../../utilities/users-service';
import "./LoginForm.css";

export default function LoginForm ({ setUser }) {
    const [credentials, setCredentials ] = useState({
        email: '',
        password: ''
    });
    
    const [ error, setError ] = useState('')

    const handleChange = (evt) => {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try{
            const user = await userService.login(credentials);
            setUser(user)
        }catch(error){
            setError("Login Failed - Try Again")
        }
    };

    return (
        <div className="loginContainer">
            <div className="mb-3 form-floating">
                <form className="loginForm" autoComplete="off" onSubmit={handleSubmit}>
                    <label className="form-label">Email</label>
                    <input className="form-control" type="email" name="email" value={credentials.email} onChange={handleChange} required />
                    <label className="form-label">Password</label>
                    <input className="form-control" type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    <button className="btn btn-outline-primary" type="submit">LOG IN</button>
                </form>
            </div>
            <h1 className="error-message">&nbsp;{error}</h1>
        </div>
    );
};