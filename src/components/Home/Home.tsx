import { Link } from "react-router-dom";
import { useState, ChangeEvent, useContext } from "react";
import Layout from "../Layout/Layout";
import "./Home.scss";
import magnifier from "../../assets/Search.svg";
import { CampContext } from "../../Camps";
import CampItem from "../CampItem/CampItem";
import logo from "../../assets/Logo.svg";

function Home() {
    const camps = useContext(CampContext);
    const [search, setSearch] = useState("");
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };
    return (
        <div className="Home">
            <Layout>
                <div className="welcome">
                    <div className="welcome-header">
                        <h1>Welcome to YelpCamp!</h1>
                    </div>
                    <div className="welcome-description">
                        <p>
                            View our hand-picked campgrounds from all over the
                            world, or add your own.
                        </p>
                    </div>
                    <div className="search-form">
                        <div className="search-input">
                            <img src={magnifier} alt="Magnifier" />
                            <input
                                type="text"
                                value={search}
                                onChange={changeHandler}
                                placeholder="Search for camps"
                            />
                        </div>
                        <button className="search-button">Search</button>
                    </div>
                    <div className="add-campground">
                        <Link to="/campgrounds/new">
                            Or add your own campground
                        </Link>
                    </div>
                </div>
                <div className="camps">
                    {camps.map((camp) => {
                        return <CampItem key={camp.id} {...camp} />;
                    })}
                </div>
                <div className="footer-logo">
                    <img src={logo} alt="Logo" />
                </div>
            </Layout>
        </div>
    );
}

export default Home;
