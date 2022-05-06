import { logOut } from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";

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
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    );
};