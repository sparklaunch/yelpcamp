import { ReactNode } from "react";
import Navigation from "../Navigation/Navigation";
import logo from "../../assets/Logo.svg";
import "./Layout.scss";

function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="Layout">
            <Navigation />
            {children}
            <div className="footer-logo">
                <img src={logo} alt="Logo" />
            </div>
        </div>
    );
}

export default Layout;
