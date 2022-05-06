import { logOut } from "../../utilities/users-service";
import { useNavigate, Link } from "react-router-dom";
import "./UserLogOut.css";

export default function UserLogOut({ user, setUser }) {
    const navigate = useNavigate();
    
    function handleLogOut() {
        try {
            logOut();
            setUser(null);
            navigate("/"); 
        }   catch (err) {
            console.log(err)
        }
    };

    return (
        <div className="user-logout">
            <button className="btn btn-light" onClick={handleLogOut}>Log Out</button>
        </div>
    );
};