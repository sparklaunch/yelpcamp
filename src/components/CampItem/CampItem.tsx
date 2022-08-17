import { Link } from "react-router-dom";
import Camp from "../../utils/Camp";
import "./CampItem.scss";

function CampItem({ id, name, description, image }: Camp) {
    return (
        <div className="CampItem">
            <div className="image">
                <img src={`/camps/${image}`} alt={name} />
            </div>
            <div className="name">
                <p>{name}</p>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
            <div className="view-campground-button">
                <Link to={`/campgrounds/${id}`}>
                    <button>View Campground</button>
                </Link>
            </div>
        </div>
    );
}

export default CampItem;
