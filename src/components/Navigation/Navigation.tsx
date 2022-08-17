import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import "./Navigation.scss";

function Navigation() {
    return (
        <div className="Navigation">
            <div className="left">
                <div className="logo">
                    <Link to="/campgrounds">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="home-link">
                    <Link to="/campgrounds">
                        <p>Home</p>
                    </Link>
                </div>
            </div>
            <div className="right">
                <div className="login">
                    <Link to="/login">
                        <p>Login</p>
                    </Link>
                </div>
                <div className="signup">
                    <Link to="/signup">
                        <button>Create an account</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
