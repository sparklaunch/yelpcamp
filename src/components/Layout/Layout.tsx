import { ReactNode } from "react";
import Navigation from "../Navigation/Navigation";
import "./Layout.scss";

function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="Layout">
            <Navigation />
            {children}
        </div>
    );
}

export default Layout;
