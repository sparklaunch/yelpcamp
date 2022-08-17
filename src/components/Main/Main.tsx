import "./Main.scss";
import Feature from "../Feature/Feature";
import logo from "../../assets/Logo.svg";
import airbnb from "../../assets/Airbnb.svg";
import booking from "../../assets/Booking.svg";
import plumGuide from "../../assets/PlumGuide.svg";
import { Link } from "react-router-dom";

function Main() {
    return (
        <div className="Main">
            <div className="left">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="header">
                    <h1>Explore the best camps on Earth.</h1>
                </div>
                <div className="description">
                    <p>
                        YelpCamp is a curated list of the best camping spots on
                        Earth. Unfiltered and unbiased reviews.
                    </p>
                </div>
                <div className="features">
                    <Feature text="Add your own camp suggestions." />
                    <Feature text="Leave reviews and experiences." />
                    <Feature text="See locations for all camps." />
                </div>
                <div className="view-campgrounds-button">
                    <Link to="/campgrounds">
                        <button>View Campgrounds</button>
                    </Link>
                </div>
                <div className="partner">
                    <p>Partnered with:</p>
                    <div className="partner-logos">
                        <img src={airbnb} alt="Airbnb Logo" />
                        <img src={booking} alt="Booking Logo" />
                        <img src={plumGuide} alt="PlumGuide Logo" />
                    </div>
                </div>
            </div>
            <div className="right"></div>
            <div className="tablet-logo">
                <img src={logo} alt="Logo" />
            </div>
        </div>
    );
}

export default Main;
