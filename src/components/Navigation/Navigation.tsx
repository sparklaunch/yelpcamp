import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import "./Navigation.scss";

function Navigation() {
    return (
        <div>
            <div className="left">
                <div className="logo">
                    <Link to="/campgrounds">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
            </div>
            <div className="right"></div>
        </div>
    );
}

export default Navigation;
